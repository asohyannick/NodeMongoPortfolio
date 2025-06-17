import { StatusCodes } from "http-status-codes";
import SkillModel from "../../../../model/skill/skill.model";
import { CategoryStatus, LEVELStatus } from "../../../interfac/skill/skill.interface";
const createSkill = async (req, res) => {
    const { name, yearsOfExperience } = req.body;
    try {
        const newSkill = new SkillModel({
            name,
            level: LEVELStatus.JAVA,
            yearsOfExperience,
            category: CategoryStatus.SENIOR
        });
        await newSkill.save();
        return res.status(StatusCodes.CREATED).json({ success: true, message: "Skillset has been created successfully!", newSkill });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: true, message: "Something went wrong!", error });
    }
};
export { createSkill };
