import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs';
const userProfileSchema = new Schema({
    name: {
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
    profilePicture: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    website: {
        type: String,
        trim: true,
    },
    socialLinks: {
        linkedin: {
            type: String,
            trim: true,
        },
        github: {
            type: String,
            trim: true,
        },
        twitter: {
            type: String,
            trim: true,
        },
        facebook: {
            type: String,
            trim: true,
        },
        instagram: {
            type: String,
            trim: true,
        },
        gitlab: {
            type: String,
            trim: true,
        },
    },
}, { timestamps: true });
userProfileSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
const UserProfile = mongoose.model('UserProfile', userProfileSchema);
export default UserProfile;
//# sourceMappingURL=userProfile.model.js.map