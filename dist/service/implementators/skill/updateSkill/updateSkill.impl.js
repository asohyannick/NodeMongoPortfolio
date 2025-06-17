import { StatusCodes } from "http-status-codes";
import SkillModel from "../../../../model/skill/skill.model";
const editAndUpdateSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, yearsOfExperience, } = req.body;
        const skill = await SkillModel.findByIdAndUpdate(id, {
            name,
            yearsOfExperience
        }, { new: true, runValidators: true });
        if (!skill) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Skill doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Skill has been updated successfully!", skill });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: true, message: "Something went wrong!", error });
    }
};
export { editAndUpdateSkill };
