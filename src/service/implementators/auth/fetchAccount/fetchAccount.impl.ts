import { Request, Response } from "express";
import AuthModel from "../../../../model/auth/auth.model";
import { StatusCodes } from "http-status-codes";
const fetchAccount = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const account = await AuthModel.findById(id);
        if (!account) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "User's account has been fetched successfully!"});
        }
        return res.status(StatusCodes.OK).json({message: "User's account has been fetched successfully!"});
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})        
    }
}

export {
    fetchAccount
}