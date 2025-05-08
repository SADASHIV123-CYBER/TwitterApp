import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to mongoDB");
    } 
 
    catch {
        console.log("failed to connect MongoDB");
        console.log(error);
    }
}