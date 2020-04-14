require("dotenv").config();
require('./database');
const app = require("./app");


let runServer = async()=>{
    await app.listen(app.get("port"));
    console.log(`Server Running in port ${app.get("port")}`);
}

runServer();