import express from 'express'
import { getCartDetails } from '../controllers/cartController.js'

const cartRouter = express.Router()

cartRouter.get('/getCartDetails', getCartDetails)

export default cartRouter