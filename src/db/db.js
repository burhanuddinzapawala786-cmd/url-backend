import mongoose from "mongoose";

export async function dbConnect() {
try{
    await mongoose.connect("mongodb://127.0.0.1:27017/urlShortenerDB");
    console.log("DB CONNECTED");
}catch(err) {
    console.log("ERROR IN DB CONNECTION");
    process.exit(1);
}
}