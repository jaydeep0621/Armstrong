const express = require("express");
require("./src/config/db")

const app = express();

const port = process.env.port || 8002;

app.get("/", function(req,res){
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Successfully Connected At Port ${port}`)
})

module.exports=  app ;