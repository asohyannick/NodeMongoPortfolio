import { Request, Response } from "express";
import ProjectModel from "../../../../model/project/project.model";
import { StatusCodes } from "http-status-codes";
const deleteProject = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const newProject = await ProjectModel.findByIdAndDelete(id);
        if (!newProject) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Project doesn't exist!"})
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Project has been deleted successfully!", newProject })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error })
    }
};
export {
    deleteProject
}