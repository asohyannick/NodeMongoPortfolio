import { Types, Document } from "mongoose";
export interface IAboutMe extends Document {
    _id: Types.ObjectId;
    name: string;
    bio: string;
    yearsOfExperience: number;
    technologies:[string];
    education: string;
    phoneNumber: number;
    country: string;
}