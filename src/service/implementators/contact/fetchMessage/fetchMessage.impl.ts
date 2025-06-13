import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ContactModel from "../../../../model/contact/contact.model";
const fetchMessage = async(req: Request, res: Response): Promise<Response> => {
 try {
    const { id } = req.params;
    const  contact = await ContactModel.findById(id);
    if (!contact) {
        return res.status(StatusCodes.OK).json({message: "Message doesn't exist!"});
    }
    return res.status(StatusCodes.OK).json({message: "Message has been fetched successfully!", contact});
 } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})        
 }
}

export {
    fetchMessage
}