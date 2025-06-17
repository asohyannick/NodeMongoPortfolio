import AboutMe from "../../../../model/aboutMe/aboutMe.model";
import { StatusCodes } from "http-status-codes";
const createDetail = async (req, res) => {
    try {
        const { name, bio, yearsOfExperience, technologies, education, phoneNumber, country } = req.body;
        const newMessage = new AboutMe({
            name,
            bio,
            yearsOfExperience,
            technologies,
            education,
            phoneNumber,
            country
        });
        await newMessage.save();
        return res.status(StatusCodes.CREATED).json({ success: true, message: "Message has been created successfully!", newMessage });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
};
export { createDetail };
