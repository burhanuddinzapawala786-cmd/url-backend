import { redis } from "../cache/redisDb.js";

export async function cacheLayer(req,res,next) {
    try{
        const url = await redis.get("http://localhost:3000/"+req.params?.code);
        if(url){
            return res.status(301).redirect(url);
        }else{
            next();
        }
    }catch(err){
        console.log("error from cache middleware")
        throw err;
    }
    
}