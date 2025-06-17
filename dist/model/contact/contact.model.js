import mongoose, { Schema } from "mongoose";
const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
const ContactModel = mongoose.model('Contact', contactSchema);
export default ContactModel;
