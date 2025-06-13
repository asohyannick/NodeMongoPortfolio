import mongoose, { Schema } from "mongoose";
import { ISkill } from '../../service/interfac/skill/skill.interface';
const skillSchema: Schema = new Schema<ISkill>({
userId:{
    type: Schema.Types.ObjectId,
    ref: "UserProfile",
    required: true,
},
name:{
    type: String,
    trim: true,
},
level:{
    type: String,
    trim: true,
},
yearsOfExperience:{
    type: Number,
},
category:{
    type: String,
    trim: true,
},
}, {timestamps: true});
const SkillModel = mongoose.model<ISkill>('SkillModel', skillSchema);
export default SkillModel;