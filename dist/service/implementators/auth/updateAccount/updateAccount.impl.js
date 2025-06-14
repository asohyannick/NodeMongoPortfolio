import { StatusCodes } from "http-status-codes";
import AuthModel from "../../../../model/auth/auth.model";
const updateMyAccount = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const { id } = req.params;
        const user = await AuthModel.findByIdAndUpdate(id, { firstName, lastName, email, password, isAdmin: true }, { new: true, runValidators: true });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User's account doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            message: "User's account has been updated successfully!",
            user
        });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { updateMyAccount };
//# sourceMappingURL=updateAccount.impl.js.map