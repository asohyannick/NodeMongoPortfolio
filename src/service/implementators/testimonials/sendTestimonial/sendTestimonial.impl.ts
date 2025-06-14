import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Testimonial from "../../../../model/testimonial/testimonial.model";

const sendTestimonialToUs = async(req: Request, res: Response): Promise<Response> => {
    const { 
            author,
            message,
            authorPosition,
            authorCompany,
            authorCountry
        } = req.body;
    try {
        const testimonial = new Testimonial({
            author,
            message,
            authorPosition,
            authorCompany,
            authorCountry
        });
        await testimonial.save();
        return res.status(StatusCodes.CREATED).json({success: true, message: "Testimonial has been created successfully!", testimonial})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})        
    }
};

export {
    sendTestimonialToUs
}