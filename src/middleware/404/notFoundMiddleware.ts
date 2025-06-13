import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
const notFoundRoute = (req: Request, res: Response) => {
    return res.status(StatusCodes.NOT_FOUND).json({
        message: "Route doesn't exist!",
       success: false,
       status: StatusCodes.NOT_FOUND || 'Route doesn\'t exist' 
    });
}

export {
    notFoundRoute
}

