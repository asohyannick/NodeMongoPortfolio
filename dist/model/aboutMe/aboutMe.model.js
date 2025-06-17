import mongoose, { Schema } from "mongoose";
const aboutMeSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
    },
    yearsOfExperience: {
        type: Number,
    },
    technologies: {
        type: [String],
        trim: true,
    },
    education: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        default: 656661021
    },
    country: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
const AboutMe = mongoose.model('AboutMe', aboutMeSchema);
export default AboutMe;
