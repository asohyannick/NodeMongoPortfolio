import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
const authToken = (req, res, next) => {
    const token = req.cookies["auth"];
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Access Denied!" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        req.user = { id: req.userId, isAdmin: decoded.isAdmin };
        next();
    }
    catch (error) {
        console.error("Token verification failed:", error);
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Access Denied!" });
    }
};
export { authToken };
//# sourceMappingURL=auth.middle.js.map