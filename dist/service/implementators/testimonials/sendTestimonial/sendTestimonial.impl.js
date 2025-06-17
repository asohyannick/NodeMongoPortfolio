import { StatusCodes } from "http-status-codes";
import Testimonial from "../../../../model/testimonial/testimonial.model";
const sendTestimonialToUs = async (req, res) => {
    const { author, message, authorPosition, authorCompany, authorCountry } = req.body;
    try {
        const testimonial = new Testimonial({
            author,
            message,
            authorPosition,
            authorCompany,
            authorCountry
        });
        await testimonial.save();
        return res.status(StatusCodes.CREATED).json({ success: true, message: "Testimonial has been created successfully!", testimonial });
    }
    catch (error) {
        console.log("Error message", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { sendTestimonialToUs };
