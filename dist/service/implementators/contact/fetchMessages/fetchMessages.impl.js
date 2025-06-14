import { StatusCodes } from "http-status-codes";
import ContactModel from "../../../../model/contact/contact.model";
const fetchMessages = async (_req, res) => {
    try {
        const messages = await ContactModel.find();
        return res.status(StatusCodes.OK).json({ message: "Messages have been fetched successfully!", messages });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { fetchMessages };
//# sourceMappingURL=fetchMessages.impl.js.map