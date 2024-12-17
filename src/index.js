import app from "./app.js";
import { ConnectionDB } from "./DBConnection/Connection.js"
app.listen(4000)
ConnectionDB()
console.log("port: ",4000);
