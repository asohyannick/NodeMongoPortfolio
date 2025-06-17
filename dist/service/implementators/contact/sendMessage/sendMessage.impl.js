import { StatusCodes } from "http-status-codes";
import ContactModel from "../../../../model/contact/contact.model";
const createMessage = async (req, res) => {
    try {
        const { name, email, title, message } = req.body;
        const newMessage = new ContactModel({
            name,
            email,
            title,
            message
        });
        await newMessage.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Your message has been received successfully. We'll get back to you shortly!",
            newMessage
        });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { createMessage };
