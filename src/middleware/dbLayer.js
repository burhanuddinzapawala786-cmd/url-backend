import { UrlModel } from "../models/urlModel.js";

export async function dbMiddleware (req,res,next) {

    
    const longUrl = req.body?.longUrl;
    if (!longUrl) {
        return next();
    }

    try {
        const findUrl = await UrlModel.findOne({ url: longUrl });
        if (!findUrl) {
            return next();
        }

        return res.status(200).json({
            message: "Url from db found",
            longUrl: findUrl.url,
            url: `http://localhost:3000/${findUrl.code}`
        });
    } catch (error) {
        return next(error);
    }
}