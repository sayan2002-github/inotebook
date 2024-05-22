import mongoose from "mongoose";

export const connectToDB = async()=>{
    try {
        const connectionString = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected succesfully : " + connectionString.connection.name);     
    } catch (error) {
        console.log(error);
        throw new Error("Can't connect to database")
    }
}