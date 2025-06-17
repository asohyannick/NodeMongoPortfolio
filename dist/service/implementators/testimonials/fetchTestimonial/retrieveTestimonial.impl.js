import { StatusCodes } from "http-status-codes";
import Testimonial from '../../../../model/testimonial/testimonial.model';
const retrieveTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonial = await Testimonial.findById(id);
        if (!testimonial) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Testimonial doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Testimonial has been fetched successfully!",
            testimonial
        });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { retrieveTestimonial };
