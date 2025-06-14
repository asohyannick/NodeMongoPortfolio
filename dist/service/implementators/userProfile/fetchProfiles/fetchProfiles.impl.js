import { StatusCodes } from "http-status-codes";
import UserProfile from "../../../../model/userProfile/userProfile.model";
const fetchProfiles = async (_req, res) => {
    try {
        const profiles = await UserProfile.find();
        return res.status(StatusCodes.OK).json({ message: "User's profiles have been fetched successfully!", profiles });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { fetchProfiles };
//# sourceMappingURL=fetchProfiles.impl.js.map