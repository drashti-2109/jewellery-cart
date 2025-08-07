import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    metal: {
        type: String,
        enum: ['Gold', 'Silver', 'Platinum'],
        default: 'Gold'
    },
    size: {
        type: String
    },
    engravingText: {
        type: String,
        maxlength: 50
    },
    weight: {
        type: Number
    },
    discount: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        required: true
    }
}, {
    _id: false
})  

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: true
    },
    items: {
        type: [CartItemSchema],
        default: []
    },
    totalItems: {
        type: Number,
        default: 0
    },
    totalQuantity: {
        type: Number,
        default: 0
    },
    cartTotal: {
        type: Number,
        default: 0
    },
    currency: {
        type: String,
        default: 'INR'
    }
}, {
    timestamps: true
})

export default mongoose.model('Cart', cartSchema)