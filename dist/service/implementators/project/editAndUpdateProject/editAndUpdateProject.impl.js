import ProjectModel from "../../../../model/project/project.model";
import { StatusCodes } from "http-status-codes";
const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, technologies, url, repositoryUrl, image, } = req.body;
        const newProject = await ProjectModel.findByIdAndUpdate(id, {
            title,
            description,
            technologies,
            url,
            repositoryUrl,
            image,
        }, { new: true, runValidators: true });
        if (!newProject) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Project doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ success: true, message: "Project has  been updated successfully!", newProject });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
};
export { updateProject };
