import winston from 'winston';
import path from 'path';
import fs from 'fs';

// Ensure logs directory exists
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        // Save all logs to combined.log
        new winston.transports.File({ filename: path.join(logDir, 'combined.log') }),
        // Save only errors to error.log
        new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'error' })
    ]
});

// If we're not in production, also log to the console
if (process.env.NODE_ENV != 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        ),
    }));
}

export default logger;