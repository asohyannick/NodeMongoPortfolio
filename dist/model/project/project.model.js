import mongoose, { Schema } from "mongoose";
import { ProjectStatus } from '../../service/interfac/project/project.inteface';
const projectSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    technologies: {
        type: [String],
        trim: true,
    },
    url: {
        type: String,
        trim: true,
    },
    repositoryUrl: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        enum: Object.values(ProjectStatus),
        default: ProjectStatus.IN_PROGRESS,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
const ProjectModel = mongoose.model('ProjectModel', projectSchema);
export default ProjectModel;
