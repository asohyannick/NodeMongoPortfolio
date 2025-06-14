import { StatusCodes } from "http-status-codes";
import AuthModel from "../../../../model/auth/auth.model";
const fetchAccounts = async (_req, res) => {
    try {
        const accounts = await AuthModel.find();
        return res.status(StatusCodes.OK).json({ message: "Accounts have been fetched successfully!", accounts });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { fetchAccounts };
//# sourceMappingURL=fetchAccount.impl.js.map