import 'dotenv/config';
import mongoose from 'mongoose';
const MONGODB_URL = process.env.MONGODB_URI;
async function databaseConfig() {
    try {
        if (!MONGODB_URL) {
            console.error("MongoDB URI is undefined");
            return;
        }
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to the Database successfully");
    }
    catch (error) {
        console.error("Failed to connect to the database", error);
    }
}
export default databaseConfig;
