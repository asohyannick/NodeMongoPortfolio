import { Types, Document } from "mongoose";
export interface IContact extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    title: string;
    message: string;
}