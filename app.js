const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
require("./src/config/db")
const route = require("../Armstrong/src/routes/route")

const app = express();
app.use(helmet());
app.use(bodyparser.json());

const port = process.env.port || 8002;

app.use("/data", route);

app.get("/", function(req,res){
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Successfully Connected At Port ${port}`)
})

module.exports =  app ;