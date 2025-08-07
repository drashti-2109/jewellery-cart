import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./config/db.js";
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from "./swagger/swaggerConfig.js";
import userRouter from "./routes/userRoute.js";
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 2000
const uri = process.env.MONGODB_URI

await connectDB(uri)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(errorHandler)

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening at http://localhost:${port}`)
})