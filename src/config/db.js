const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/data", {
    useNewUrlParser:true, 
    useUnifiedTopology: true, 
    useCreateIndex: true})

mongoose.connection
    .then(()=>{
        console.log("DB Successfully Connected");
    }, (err)=> {
        console.log("DB Connection Failed", err);
    })