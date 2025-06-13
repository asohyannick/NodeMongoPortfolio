import AuthModel from "../../../../model/auth/auth.model";
import { Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
const refreshAccessToken = async(req: Request, res: Response): Promise<Response> => {
    const {refreshToken} = req.body;
    if (!refreshToken) {
        return res.status(StatusCodes.NOT_FOUND).json({message: "RefreshToken not found!"});
    }
    try {
       const userPayload = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY as string) as JwtPayload;
       const user = await AuthModel.findById(userPayload.id);
       if (!user || user.refreshToken !== refreshToken) {
         return res.status(StatusCodes.NOT_FOUND).json({message: "Invalid RefreshToken!"});
       }
       const accessToken = jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '15m'
       });
       return res.status(StatusCodes.CREATED).json({
        message: "A new access token has been generated for you!",
        success: true,
        accessToken,
       });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})        
    }
};

export {
    refreshAccessToken
}