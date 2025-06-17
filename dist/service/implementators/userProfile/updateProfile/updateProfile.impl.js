import { StatusCodes } from "http-status-codes";
import UserProfile from "../../../../model/userProfile/userProfile.model";
const updateMyProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password, profilePicture, bio, location, website, socialLinks } = req.body;
        const profile = await UserProfile.findByIdAndUpdate(id, {
            email,
            password,
            profilePicture,
            bio,
            location,
            website,
            socialLinks
        }, { new: true, runValidators: true });
        if (!profile) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User's profile account not found!" });
        }
        return res.status(StatusCodes.OK).json({ message: "User's profile has  been updated successfully!", profile });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { updateMyProfile };
