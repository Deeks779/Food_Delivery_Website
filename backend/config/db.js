import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rujula:1234@cluster0.evrlsn1.mongodb.net/food_delivery_website').then(()=>console.log("DB connected!!"));
}