import { customAlphabet } from "nanoid";
import { UrlModel } from "../models/urlModel.js";
import { redis } from "../cache/redisDb.js";
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const generateCode = customAlphabet(alphabet, 7);

export async function createUrl(longUrl) {
  const code = generateCode();
  try {
    await UrlModel.create({ code, url:longUrl });
    console.log("this is the code" , code);
    await redis.set("http://localhost:3000/"+code , longUrl);
    return code;
  } catch (err) {
    if (err.code === 11000) return createUrl(longUrl); 
    throw err;
  }
}
