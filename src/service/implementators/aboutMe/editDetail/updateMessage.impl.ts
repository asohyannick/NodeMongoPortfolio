import { Request, Response } from "express";
import AboutMe from "../../../../model/aboutMe/aboutMe.model";
import { StatusCodes } from "http-status-codes";
const updateMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { name,
            bio,
            yearsOfExperience,
            technologies,
            education,
            phoneNumber,
            country
        } = req.body;
        const information = await AboutMe.findByIdAndUpdate(
            id,
            {
                name,
                bio,
                yearsOfExperience,
                technologies,
                education,
                phoneNumber,
                country
            },
            { new: true, runValidators: true }
        );
        if (!information) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Message doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Message has been updated successfully!", information });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" })
    }
}

export {
    updateMessage
}