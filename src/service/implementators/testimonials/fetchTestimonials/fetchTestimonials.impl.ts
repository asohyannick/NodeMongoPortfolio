import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Testimonial from '../../../../model/testimonial/testimonial.model';

const retrieveTestimonials = async(req: Request, res: Response): Promise<Response> => {
    try {
        const testimonials = await Testimonial.find(); 
        return res.status(StatusCodes.OK).json({success: true, message: "Testimonials have been fetched successfully!", testimonials})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})        
    }
};

export {
    retrieveTestimonials
}