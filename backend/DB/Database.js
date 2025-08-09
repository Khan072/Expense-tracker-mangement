import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://aabid072:ns1RkYO2NCLB4jIU@cluster0.qv03kcf.mongodb.net/";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}