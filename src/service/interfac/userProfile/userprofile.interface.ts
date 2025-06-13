import { Document, Types} from "mongoose";
export interface IUserProfile extends Document {
 _id: Types.ObjectId;
 name: string;
 email: string;
 password: string;
 profilePicture: string;
 bio: string;
 location: string;
 website: string;
 socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
    facebook: string;
    instagram: string;
    gitlab: string;
 };
}