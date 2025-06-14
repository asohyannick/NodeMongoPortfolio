import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
const authSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    refreshToken: {
        type: String,
        trim: true
    },
}, { timestamps: true });
authSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
const AuthModel = mongoose.model('AuthModel', authSchema);
export default AuthModel;
//# sourceMappingURL=auth.model.js.map