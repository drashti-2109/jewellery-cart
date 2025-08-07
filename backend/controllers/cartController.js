import Cart from '../models/Cart.js'

export const getCartDetails = async () => {
    try {
        const cart = await Cart.find()

        return res.status(200).json({ success: true, data: cart })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, error: "Internal Server Error" })
    }
}