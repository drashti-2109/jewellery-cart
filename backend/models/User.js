import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: [true, "Email already present"],
        lowercase: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false  // don't return password by default while querying data
    },
    phone: {
        type: String,
        maxlength: 15
    },
    role: {
        type: String,
        enum: ["Customer", "Admin"],
        default: "Customer"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

// pre-save hook to hash password
userSchema.pre('save', async function(next) {
    if(this.isNew && !this.isModified('password')) return next()

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    
    next()
})

// instance method to compare entered password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('User', userSchema)