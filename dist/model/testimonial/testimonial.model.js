import mongoose, { Schema } from "mongoose";
const testimonialSchema = new Schema({
    author: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    },
    authorPosition: {
        type: String,
        trim: true,
    },
    authorCompany: {
        type: String,
        trim: true,
    },
    authorCountry: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
