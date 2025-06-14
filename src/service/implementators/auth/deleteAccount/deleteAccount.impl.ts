import { Request, Response } from "express";
import AuthModel from "../../../../model/auth/auth.model";
import { StatusCodes } from "http-status-codes";
const removeAnAccount = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const user = await AuthModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "User's account not found!"});
        }
        return res.status(StatusCodes.OK).json({message: "User's account has been deleted successfully!", user});
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error})        
    }
}

export {
    removeAnAccount
}