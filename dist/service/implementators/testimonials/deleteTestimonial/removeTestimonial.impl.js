import { StatusCodes } from "http-status-codes";
import Testimonial from '../../../../model/testimonial/testimonial.model';
const removeTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonial = await Testimonial.findByIdAndDelete(id);
        if (!testimonial) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Testimonial doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Testimonial has been deleted successfully!",
            testimonial
        });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { removeTestimonial };
