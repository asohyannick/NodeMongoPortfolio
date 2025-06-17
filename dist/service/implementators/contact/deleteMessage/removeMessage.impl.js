import { StatusCodes } from "http-status-codes";
import ContactModel from "../../../../model/contact/contact.model";
const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await ContactModel.findByIdAndDelete(id);
        if (!contact) {
            return res.status(StatusCodes.OK).json({ message: "Message doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ message: "Message has been deleted successfully!", contact });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { deleteMessage };
