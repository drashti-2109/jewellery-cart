import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: 0
    },
    category: {
        type: String,
        enum: ['Ring', 'Necklace', 'Earrings', 'Bracelet', 'Pendant', 'Other'],
        required: true
    },
    metal: {
        type: String,
        enum: ['Gold', 'Silver', 'Platinum', 'Diamond'],
        required: true
    },
    purity: {
        type: String,
        enum: ['14K', '18K', '22K', '24K'],
        default: '22K'
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        default: 1,
        min: 0
    },
    isCustomizable: {
        type: Boolean,
        default: false
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    discount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

export default mongoose.model('Product', productSchema)