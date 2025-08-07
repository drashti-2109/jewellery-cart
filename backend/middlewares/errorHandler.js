import logger from "../utils/logger.js";

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.name}: ${err.message}`, { stack: err.stack });

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};

export default errorHandler;