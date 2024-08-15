import mongoose from "mongoose";

const mongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error.message)
    }
}

export default mongoDBConnect

