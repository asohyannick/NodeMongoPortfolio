import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SkillModel from "../../../../model/skill/skill.model";
const eradicateSkill = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const skill = await SkillModel.findByIdAndDelete(id);
        if (!skill) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Skill doesn't exist!"})
        }
        return res.status(StatusCodes.OK).json({success: true, message:"Skill has been deleted successfully!", skill});
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: true, message: "Something went wrong!", error})
    }
};
export {
    eradicateSkill
}