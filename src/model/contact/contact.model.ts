import mongoose, { Schema } from "mongoose";
import { IContact } from '../../service/interfac/contact/contact.interface';
const contactSchema: Schema = new Schema<IContact>({
name:{
    type: String,
    trim: true,
},
email:{
    type: String,
    trim: true,
},
title:{
    type: String,
    trim: true,
},
message:{
    type: String,
    trim: true,
},
}, {timestamps: true});
const ContactModel = mongoose.model<IContact>('Contact', contactSchema);
export default ContactModel;