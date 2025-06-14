import { Request, Response } from "express";
import ProjectModel from "../../../../model/project/project.model";
import { StatusCodes } from "http-status-codes";
import { ProjectStatus } from "../../../interfac/project/project.inteface";
const searchProject = async (req: Request, res: Response): Promise<Response> => {
    const {
        title,
        description,
        technologies,
        url,
        repositoryUrl,
        image,
        sortBy,
        sortOrder = 'asc',
        page = 1,
        limit = 12,
    } = req.query;
    const filter: any = {};
    const pageNumber = typeof page === 'string' ? parseInt(page) : 1;
    const limitNumber = typeof limit === 'string' ? parseInt(limit) : 12;
    if (title) {
        filter.title = { $regex: title, $options: 'i' }
    }
    if (description) {
        filter.description = { $regex: description, $options: 'i' }
    }
    // Filter technologies if provided
    if (technologies && typeof technologies === 'string') {
        filter.technologies = { $in: technologies.split(',').map(technology => technology.trim()) }; // Split by commas for multiple tags
    } else if(Array.isArray(technologies)) {
        filter.technologies = { $in: technologies.map(technology => (typeof technology === 'string' ? technology.trim() : technology))}; // Handle array
    }
    if (url) {
        filter.url = { $regex: url, $options: 'i' }
    }
    if (repositoryUrl) {
        filter.repositoryUrl = { $regex: repositoryUrl, $options: 'i' }
    }
    if (image) {
        filter.image = { $regex: image, $options: 'i' }
    }
    try {
        // Set the sort options
        const sortOptions: any = {};
        if (sortBy && typeof sortBy === 'string') {
            sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        }  
        // Count total projects matching the filter
        const totalProjects = await ProjectModel.countDocuments(filter);
        
        // Fetch projects with filtering, sorting, and pagination
        const projects = await ProjectModel.find(filter)
            .sort(sortOptions)
            .skip((pageNumber - 1) * limitNumber) // Calculate documents to skip
            .limit(Number(limit)); // Limit the number of documents returned

        return res.status(StatusCodes.OK).json({
            projects,
            totalProjects,
            totalPages: Math.ceil(totalProjects / limitNumber),
            currentPage: pageNumber,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error })
    }
};
export {
    searchProject
}