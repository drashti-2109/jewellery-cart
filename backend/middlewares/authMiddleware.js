import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const authenticateUser = async (req, res, next) => {
    const token = req.cookies.token    
    
    if(!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized - no token' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)        
        req.user = await User.findById(decoded._id)
        
        next()
    } catch (err) {
        res.status(401).json({ success: false, message: 'Unauthorized - invalid token' })
    }
}

export default authenticateUser