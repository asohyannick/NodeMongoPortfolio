import { Document } from "mongoose";
export enum CategoryStatus {
    JUNIOR = "JUNIOR FULL STACK NODE.JS DEVELOPER",
    MID_LEVEL = "MID-LEVEL FULL STACK NODE.JS DEVELOPER",
    SENIOR = "SENIOR FULL STACK NODE.JS DEVELOPER",
};

export enum LEVELStatus {
    NODEJS = "FULL STACK NODE.JS DEVELOPER",
    JAVA = "FULL STACK SPRING BOOT DEVELOPER",
    GOLANG = "FULL STACK GOLANG DEVELOPER"
}

export interface ISkill extends Document {
    name: string[];
    level: LEVELStatus;
    yearsOfExperience: number;
    category: CategoryStatus;
}