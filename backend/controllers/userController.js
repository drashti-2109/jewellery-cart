import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from 'bcrypt';
import { sendResponse } from "../utils/sendResponse.js";

export const registerUser = async (req, res, next) => {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        const user = await User.create({ name, email, password, phone });

        return sendResponse(res, 200, true, "User registered successfully", user);
    } catch (error) {
        next(error)
    }
};

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const token = generateToken(user)

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        return sendResponse(res, 200, true, "Login successfully", user);
    } catch (error) {
        next(error)
    }
};

export const currentUser = async (req, res, next) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        return sendResponse(res, 200, true, "Data fetched successfully", user);

    } catch (error) {
        next(error)
    }
};