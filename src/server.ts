import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import morgan from 'morgan';
import databaseConfig from './config/databaseConfig/mongoDBConfig';
import { rateLimit } from 'express-rate-limit'
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL as string || '*',
    credentials: true,
}));
app.use(compression());
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})
app.use(limiter);
const APP_NAME: string = process.env.APP_NAME || 'codingLamb';
const APP_HOST: string  = process.env.APP_HOST || 'localhost';
const APP_PORT: string | number = parseInt(process.env.APP_PORT || '80000', 10);
const API_VERSION: string | number = process.env.APP_VERSION  || 'v1';
if (process.env.NODE_ENV as string === 'development') {
    app.use(morgan('dev'))
}
// Routes

async function serve() {
    try {
        await databaseConfig(),
        app.listen(APP_PORT, () => {
        console.log(`Server is owned by 
            ${APP_NAME} 
            running on ${APP_HOST}: 
            port ${APP_PORT}
            on api/${API_VERSION}...`
        )
      });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Something went wrong', error.message);
        } else {
            console.error('Something went wrong')
        }
    }
}

serve();
