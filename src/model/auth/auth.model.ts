import mongoose, { Schema, Types } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IAuth } from '../../service/interfac/auth/auth.interface';
const authSchema: Schema = new Schema<IAuth> ({
    firstName: {
        type: String,
        trim: true,
    },
    lastName:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    refreshToken:{
        type: String,
        trim: true
    },
}, { timestamps: true});
authSchema.pre<IAuth>('save', async function (next) {
    if(!this.isModified('password')) return next;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
} )
const AuthModel = mongoose.model<IAuth>('AuthModel', authSchema);
export default AuthModel;