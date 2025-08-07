import express from 'express'
import { getProducts } from '../controllers/productController.js'

const productRouter = express.Router()

/**
 * @swagger
 * /api/products/getProducts:
 *   get:
 *     summary: Get list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products returned     
*/
productRouter.get('/getProducts', getProducts)

export default productRouter