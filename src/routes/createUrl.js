import { Router } from "express";
import { createShortUrl } from "../controllers/createShortUrl.js";
import { redirectToUrl } from "../controllers/redirect.js";
import { dbMiddleware } from "../middleware/dbLayer.js";
export const router = Router();

router.post("/createUrl" ,dbMiddleware ,  createShortUrl);
