import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ContactModel from "../../../../model/contact/contact.model";
const updateMessage = async(req: Request, res: Response): Promise<Response> => {
 try {
    const { id } = req.params;
    const {name, email, title, message } = req.body;
    const  contact = await ContactModel.findByIdAndUpdate(id,{name, email, title, message}, {runValidators: true});
    return res.status(StatusCodes.OK).json({success: true, message: "Message has been updated successfully!", contact});
 } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})        
 }
}

export {
    updateMessage
}