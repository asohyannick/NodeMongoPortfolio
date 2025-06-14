import AboutMe from "../../../../model/aboutMe/aboutMe.model";
import { StatusCodes } from "http-status-codes";
const fetchMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const information = await AboutMe.findById(id);
        if (!information) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Message doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Message has been fetched successfully!", information });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { fetchMessage };
//# sourceMappingURL=fetchDetail.impl.js.map