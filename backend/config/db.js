import mongoose from "mongoose";

const connectDB = async (uri) => {
    if(!uri) {
        console.error("Mongodb uri not provided")
        process.exit(1)
    }

    try {
        const conn = await mongoose.connect(uri)       
        console.log(`Mongodb connected: ${conn.connection.host}`)

    } catch (error) {
        console.error("Mongodb connection error: ", error)
        process.exit(1)
    }
}

export default connectDB