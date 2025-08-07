import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()

        return res.status(200).json({ success: true, data: products })
    
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, error: "Internal Server Error" })
    }
}