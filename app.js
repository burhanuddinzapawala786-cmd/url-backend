import express from "express";
import cors from "cors";
import { router as createUrlRouter } from "./src/routes/createUrl.js";
import { router as redirectRouter } from "./src/routes/redirect.js";
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/" , (req,res) => {
   return res.status(200).json({msg:"server running"});
})
app.use("/" , createUrlRouter);
app.use("/" , redirectRouter);