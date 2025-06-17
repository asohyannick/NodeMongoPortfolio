import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
// register routes
import authRoute from './controller/auth/auth.controller';
import profileRoute from './controller/userProfile/userProfile.controller';
import contactRoute from './controller/contact/contact.controller';
import aboutAuthorRoute from './controller/aboutMe/aboutMe.controller';
import testimonialRoute from './controller/testimonial/testimonial.controller';
import skillRoute from './controller/skill/skill.controller';
import projectRoute from './controller/project/project.controller';
import { notFoundRoute } from './middleware/404/notFoundMiddleware';
import { serverError } from './middleware/500/500.server-error';
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
const APP_PORT: string | number = parseInt(process.env.APP_PORT  || '8000', 10);
const API_VERSION: string | number = process.env.APP_VERSION  || 'v1';
if (process.env.NODE_ENV as string === 'development') {
    app.use(morgan('dev'))
}
// Routes
app.use(`/api/${process.env.API_VERSION}/auth`, authRoute);
app.use(`/api/${process.env.API_VERSION}/profile`, profileRoute);
app.use(`/api/${process.env.API_VERSION}/contact`, contactRoute);
app.use(`/api/${process.env.API_VERSION}/about-me`, aboutAuthorRoute);
app.use(`/api/${process.env.API_VERSION}/testimonial`, testimonialRoute);
app.use(`/api/${process.env.API_VERSION}/skill`, skillRoute);
app.use(`/api/${process.env.API_VERSION}/project`, projectRoute);

app.use(notFoundRoute);
app.use(serverError);
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
