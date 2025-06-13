import { Types, Document } from "mongoose";
export interface ITestimonial extends Document {
    userId: Types.ObjectId;
    author: string;
    message: string;
    authorPosition: string;
    authorCompany: string;
}