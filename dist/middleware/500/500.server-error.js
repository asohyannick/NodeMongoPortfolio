import { StatusCodes } from "http-status-codes";
const serverError = (_err, _req, res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong!",
        status: StatusCodes.INTERNAL_SERVER_ERROR || "Server Error",
        success: false
    });
};
export { serverError };
