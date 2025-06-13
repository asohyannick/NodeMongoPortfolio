import mongoose, { Schema } from "mongoose";
import { IUserProfile } from '../../service/interfac/userProfile/userprofile.interface';
import bcrypt from 'bcryptjs';
const userProfileSchema: Schema = new Schema<IUserProfile>({
name: {
    type: String,
    trim: true,
},
email: {
    type: String,
    trim: true,
    unique: true,
},
password:{
    type: String,
    trim: true,
},
profilePicture:{
    type: String,
    trim: true,
},
bio:{
    type: String,
    trim: true,
},
location:{
    type: String,
    trim: true,
},
website:{
    type: String,
    trim: true,
},
socialLinks:{
    linkedin: {
        type: String,
        trim: true,
    },
    github:{
        type: String,
        trim: true,
    },
    twitter:{
        type: String,
        trim: true,
    },
    facebook:{
        type: String,
        trim: true,
    },
    instagram:{
        type: String,
        trim: true,
    },
    gitlab:{
      type: String,
      trim: true,
    },
},
}, {timestamps: true});
userProfileSchema.pre<IUserProfile>('save', async function(next) {
    if (!this.isModified('password'))  return next;
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
})
const UserProfile = mongoose.model<IUserProfile>('UserProfile', userProfileSchema);
export default UserProfile;