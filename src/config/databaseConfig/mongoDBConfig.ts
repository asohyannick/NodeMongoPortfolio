import 'dotenv/config';
import mongoose from 'mongoose';
const MONGODB_URL: string = process.env.MONGODB_URI as string;
async function databaseConfig() {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to the Database successfully");
    } catch (error) {
        console.error("Failed to connect to the database")
    }
}

export default databaseConfig;
