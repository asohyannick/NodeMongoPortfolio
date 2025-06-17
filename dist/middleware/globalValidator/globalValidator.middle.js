import { StatusCodes } from "http-status-codes";
const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate(req.body, { abortEarly: false });
            next();
        }
        catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: error });
        }
    };
};
export { validate };
