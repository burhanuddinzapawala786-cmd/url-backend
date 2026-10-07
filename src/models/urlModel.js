import mongoose from "mongoose";
import { urlSchema } from "../schema/urlSchema.js";

export const UrlModel = mongoose.model("url" , urlSchema);