import { Types, Document } from "mongoose";
export interface ISkill extends Document {
    userId: Types.ObjectId;
    name: string;
    level: string;
    yearsOfExperience: number;
    category: string;
}