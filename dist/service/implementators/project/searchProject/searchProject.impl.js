import ProjectModel from "../../../../model/project/project.model";
import { StatusCodes } from "http-status-codes";
const searchProject = async (req, res) => {
    const { title, description, technologies, url, repositoryUrl, image, sortBy, sortOrder = 'asc', page = 1, limit = 12, } = req.query;
    const filter = {};
    const pageNumber = typeof page === 'string' ? parseInt(page) : 1;
    const limitNumber = typeof limit === 'string' ? parseInt(limit) : 12;
    if (title) {
        filter.title = { $regex: title, $options: 'i' };
    }
    if (description) {
        filter.description = { $regex: description, $options: 'i' };
    }
    if (technologies && typeof technologies === 'string') {
        filter.technologies = { $in: technologies.split(',').map(technology => technology.trim()) };
    }
    else if (Array.isArray(technologies)) {
        filter.technologies = { $in: technologies.map(technology => (typeof technology === 'string' ? technology.trim() : technology)) };
    }
    if (url) {
        filter.url = { $regex: url, $options: 'i' };
    }
    if (repositoryUrl) {
        filter.repositoryUrl = { $regex: repositoryUrl, $options: 'i' };
    }
    if (image) {
        filter.image = { $regex: image, $options: 'i' };
    }
    try {
        const sortOptions = {};
        if (sortBy && typeof sortBy === 'string') {
            sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        }
        const totalProjects = await ProjectModel.countDocuments(filter);
        const projects = await ProjectModel.find(filter)
            .sort(sortOptions)
            .skip((pageNumber - 1) * limitNumber)
            .limit(Number(limit));
        return res.status(StatusCodes.OK).json({
            projects,
            totalProjects,
            totalPages: Math.ceil(totalProjects / limitNumber),
            currentPage: pageNumber,
        });
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
};
export { searchProject };
//# sourceMappingURL=searchProject.impl.js.map