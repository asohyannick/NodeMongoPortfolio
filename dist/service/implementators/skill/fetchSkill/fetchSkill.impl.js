import { StatusCodes } from "http-status-codes";
import SkillModel from "../../../../model/skill/skill.model";
const retrieveSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await SkillModel.findById(id);
        if (!skill) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Skill doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Skill has been fetched successfully!", skill });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: true, message: "Something went wrong!", error });
    }
};
export { retrieveSkill };
