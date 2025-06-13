import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const logout = async(req: Request, res: Response): Promise<Response> => {
    try {
        res.cookie('auth', '', {
          httpOnly: true,
          expires: new Date(0),
          secure: process.env.JWT_SECRET_KEY as string === 'production',
          sameSite: 'strict'
        });
        return res.status(StatusCodes.OK).json({
            message: "User has been logged out successfully!"
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})        
    }
}

export {
    logout
}