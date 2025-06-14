import AuthModel from "../../../../model/auth/auth.model";
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
const createAnAcount = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        let user = await AuthModel.findOne({ email });
        if (user) {
            user.refreshToken = '';
            await user.save();
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "User already exist!" });
        }
        const newUser = new AuthModel({
            firstName,
            lastName,
            email,
            password,
            isAdmin: true,
        });
        await newUser.save();
        const accessToken = jwt.sign({
            id: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email, isAdmin: newUser.isAdmin
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '15m'
        });
        const refreshToken = jwt.sign({
            id: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email, isAdmin: newUser.isAdmin
        }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });
        newUser.refreshToken = refreshToken;
        await newUser.save();
        res.cookie('auth', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 90000,
            sameSite: 'strict'
        });
        return res.status(StatusCodes.CREATED).json({
            user: newUser,
            success: true,
            message: "Account has been created successfully!",
            accessToken,
            refreshToken
        });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!" });
    }
};
export { createAnAcount };
//# sourceMappingURL=register.impl.js.map