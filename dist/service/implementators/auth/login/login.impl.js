import AuthModel from "../../../../model/auth/auth.model";
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await AuthModel.findOne({ email, isAdmin: true });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User not found!" });
        }
        const matchedPassword = await bcrypt.compare(password, user.password);
        if (!matchedPassword) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid Credentials!" });
        }
        const accessToken = jwt.sign({
            id: user._id, email: user.email, isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        });
        res.cookie('auth', accessToken, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 90000,
            secure: process.env.JWT_SECRET_KEY === 'production'
        });
        const refreshToken = jwt.sign({
            id: user._id, email: user.email, isAdmin: user.isAdmin
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '7d'
        });
        user.refreshToken = refreshToken;
        await user.save();
        return res.status(StatusCodes.OK).json({
            message: "User has been logged in successfully",
            id: user._id,
            isAdmin: user.isAdmin,
            accessToken,
            refreshToken
        });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { signin };
//# sourceMappingURL=login.impl.js.map