import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import AuthModel from "../../../../model/auth/auth.model";
const fetchAccounts = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const accounts = await AuthModel.find();
        return res.status(StatusCodes.OK).json({message: "Accounts have been fetched successfully!", accounts});
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})           
    }
}

export {
    fetchAccounts
}