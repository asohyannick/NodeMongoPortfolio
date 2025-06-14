import { StatusCodes } from "http-status-codes";
import ContactModel from "../../../../model/contact/contact.model";
const updateMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, title, message } = req.body;
        const contact = await ContactModel.findByIdAndUpdate(id, { name, email, title, message }, { new: true, runValidators: true });
        if (!contact) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Message doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Message has been updated successfully!", contact });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { updateMessage };
//# sourceMappingURL=updateMessage.impl.js.map