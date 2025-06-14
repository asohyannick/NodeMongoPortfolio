import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Testimonial from '../../../../model/testimonial/testimonial.model';

const updateTestimonial = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { author,
            message,
            authorPosition,
            authorCompany,
            authorCountry
        } = req.body;
        const testimonial = await Testimonial.findByIdAndUpdate(id,
            {
                author,
                message,
                authorPosition,
                authorCompany,
                authorCountry
            }, { runValidators: true });
        if (!testimonial) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Testimonial doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Testimonial has been updated successfully!",
            testimonial
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" })
    }
};

export {
    updateTestimonial
}