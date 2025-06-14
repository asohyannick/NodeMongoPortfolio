import { StatusCodes } from "http-status-codes";
import UserProfile from "../../../../model/userProfile/userProfile.model";
const fetchProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await UserProfile.findById(id);
        if (!profile) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User's profile not found!" });
        }
        return res.status(StatusCodes.OK).json({ message: "User's profile has been fetched successfully!", profile });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { fetchProfile };
//# sourceMappingURL=fetchProfile.impl.js.map