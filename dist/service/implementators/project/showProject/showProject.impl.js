import ProjectModel from "../../../../model/project/project.model";
import { StatusCodes } from "http-status-codes";
import { ProjectStatus } from "../../../interfac/project/project.inteface";
const showProject = async (req, res) => {
    try {
        const { title, description, technologies, url, repositoryUrl, image, } = req.body;
        const newProject = new ProjectModel({
            title,
            description,
            technologies,
            url,
            repositoryUrl,
            image,
            status: ProjectStatus.COMPLETED,
            startDate: Date.now(),
            endDate: Date.now(),
        });
        await newProject.save();
        return res.status(StatusCodes.CREATED).json({ success: true, message: "Project has been created successfully!", newProject });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
};
export { showProject };
//# sourceMappingURL=showProject.impl.js.map