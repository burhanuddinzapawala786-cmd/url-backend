import { redis } from "../cache/redisDb.js";
import { UrlModel } from "../models/urlModel.js";
export async function redirectToUrl(req,res) {
    const code = req.params?.code;
    if(!code) return res.status(400).json({
        msg:"code isnt there"
    })

    const urlToRedirectTo = await UrlModel.findOne({code});
    await redis.set("http://localhost:3000/"+code , urlToRedirectTo.url);
   if(urlToRedirectTo) {
    return res.status(301).redirect(urlToRedirectTo.url);
   }else{
    console.log("error from db to find URL");
   }
}