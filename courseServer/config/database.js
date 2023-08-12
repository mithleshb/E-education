import mongoose from "mongoose";
export const connectDB=async ()=> {

const {connection}=await mongoose.connect(process.env.MONGO_URI);
console.log(`mongodb is connect ${connection.host}`)
}
////MONGO_URI=mongodb+srv://root:root@cluster0.xbfwe.mongodb.net/educationdb?retryWrites=true&w=majority