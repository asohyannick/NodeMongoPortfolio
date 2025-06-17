import AboutMe from "../../../../model/aboutMe/aboutMe.model";
import { StatusCodes } from "http-status-codes";
const fetchMessages = async (_req, res) => {
    try {
        const messages = await AboutMe.find();
        return res.status(StatusCodes.OK).json({ success: true, message: "Messages have been fetched successfully!", messages });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { fetchMessages };
