import { Types, Document } from "mongoose";
export enum ProjectStatus {
    PENDING = "PENDING",
    INPROGRESS = "IN PROGRESS",
    COMPLETED = "COMPLETED"
}
export interface IProject extends Document {
    userId: Types.ObjectId;
    title: string;
    description: string;
    technologies:[string];
    url: string;
    repositoryUrl: string;
    image: string;
    status: ProjectStatus;
    startDate: Date;
    endDate: Date;
}