import { createUrl } from "../services/createUrl.js";

export async function createShortUrl(req,res) {
   try{
     const longUrl = req.body?.longUrl;
     console.log(req.body)
    if(!longUrl) return res.status(400).json({message:"longUrl is required"});
    const code = await createUrl(longUrl);
    const newUrl = "http://localhost:3000/"+code;
    return res.status(200).json({
        message:"short url created",
        longUrl:longUrl,
        url:newUrl
    })
   }catch(err) {
    console.error("ERROR IN CREATE URL CONTROLLER", err);
    return res.status(500).json({message:"Unable to create short URL"});
   }
}