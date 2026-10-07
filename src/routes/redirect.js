import { Router } from "express";
import { redirectToUrl } from "../controllers/redirect.js";
import { cacheLayer } from "../middleware/cacheLayeer.js";
export const router = Router();

router.get("/:code" , cacheLayer , redirectToUrl);
 