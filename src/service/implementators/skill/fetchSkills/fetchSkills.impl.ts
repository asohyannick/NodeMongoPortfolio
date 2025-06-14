import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SkillModel from "../../../../model/skill/skill.model";
const retrieveSkills = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const skills = await SkillModel.find();
        return res.status(StatusCodes.OK).json({success: true, message:"Skills have been fetched successfully!", skills});
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: true, message: "Something went wrong!", error})
    }
};
export {
    retrieveSkills
}