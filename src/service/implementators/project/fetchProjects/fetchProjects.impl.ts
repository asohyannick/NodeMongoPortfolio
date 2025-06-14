import { Request, Response } from "express";
import ProjectModel from "../../../../model/project/project.model";
import { StatusCodes } from "http-status-codes";
const retreiveProjects = async (req: Request, res: Response): Promise<Response> => {
    try {
        const newProjects = await ProjectModel.find();
        return res.status(StatusCodes.OK).json({ success: true, message: "Projects have been fetched successfully!", newProjects })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error })
    }
};
export {
    retreiveProjects
}