import { Document } from "mongoose";
export interface ITestimonial extends Document {
    author: string;
    message: string;
    authorPosition: string;
    authorCompany: string;
    authorCountry: string;
}