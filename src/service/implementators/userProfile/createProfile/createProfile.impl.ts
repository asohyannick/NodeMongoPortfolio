import UserProfile from "../../../../model/userProfile/userProfile.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const createProfile = async(req: Request, res: Response): Promise<Response> => {
    try {
        const {
            name, 
            email,
            password,
            profilePicture,
            bio,
            location,
            website,
            socialLinks
        } = req.body;
        const newProfile = new UserProfile({
            name, 
            email,
            password,
            profilePicture,
            bio,
            location,
            website,
            socialLinks
        });
        await newProfile.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User's profile has been created successfully!",
            newProfile
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!"})        
    }
}

export {
    createProfile
}