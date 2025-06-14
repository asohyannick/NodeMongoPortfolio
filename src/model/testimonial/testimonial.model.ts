import mongoose, { Schema } from "mongoose";
import { ITestimonial } from '../../service/interfac/testimonial/testimonial.interface';
const testimonialSchema: Schema = new Schema<ITestimonial>({
author:{
    type: String,
    trim: true,
},
message:{
    type: String,
    trim: true,
},
authorPosition:{
    type: String,
    trim: true,
},
authorCompany:{
    type: String,
    trim: true,
},
authorCountry:{
    type: String,
    trim: true,
},
}, {timestamps: true});
const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;