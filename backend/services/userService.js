import { body } from "express-validator";

export const registerValidation = [
    body('name')
        .notEmpty().withMessage("Name is required")
        .isLength({ max: 50 }).withMessage("Name can be max 50 characters"),

    body('email') 
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email format"), 
        
    body('password')
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 6 }).withMessage("Password must be atleast 6 characters"),
        
    body('phone')
        .optional()
        .isLength({ max:15 }).withMessage("Phone number can be max 15 digits"), 

    body('role')
        .optional()
        .isIn(['Customer', 'Admin']).withMessage('Invalid role')    
]

export const loginValidation = [
    body('email')
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email"),

    body('password')
        .notEmpty().withMessage("Password is required")   
]