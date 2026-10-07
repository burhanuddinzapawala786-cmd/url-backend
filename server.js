import { app } from "./app.js";
import { dbConnect } from "./src/db/db.js";

try{
    await dbConnect();
    app.listen(3000);
    console.log("server running")
}catch(err) {
    console.log("ERROR IN SERVER RESTART ,err")
    process.exit(1);
}