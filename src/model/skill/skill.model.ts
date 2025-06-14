import mongoose, { Schema } from "mongoose";
import { CategoryStatus,  ISkill, LEVELStatus } from '../../service/interfac/skill/skill.interface';
const skillSchema: Schema = new Schema<ISkill>({
name:{
    type: [String],
    trim: true,
},
level:{
    type: String,
    enum: Object.values(LEVELStatus),
    default: LEVELStatus.NODEJS,
    trim: true,
},
yearsOfExperience:{
    type: Number,
},
category:{
    type: String,
    enum:Object.values(CategoryStatus),
    default: CategoryStatus.MID_LEVEL,
},
}, {timestamps: true});
const SkillModel = mongoose.model<ISkill>('SkillModel', skillSchema);
export default SkillModel;