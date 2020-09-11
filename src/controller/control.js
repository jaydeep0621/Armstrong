const data = require("../model/data");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
router.use(bodyparser.json());
const async = require("async")

module.exports = {
    calculate: async(req,res,next)=> {
        try{
            const Data = new data(req.body);
            console.log(Data);
            let a = Data.number1;
            let b = Data.number2;
            let c = a * b;
            /*var i,c=0,b;
            for(i=j;i>0;i=i/10);
            {
                b = i%10;
                c = c+(b*b*b);
                console.log("C =",c,"J=",j,"i=",i,"b=",b)
            }
            if(j==c)
            res.send("Armstrong Number");
            else
            res.send("Not Armmstrong Number");*/
            await Data.save();
            res.send("Output is Ready");
            console.log("Output is :", c);
            
            
        }catch(err){
            res.send("Something Went Wrong");
        }

    }
}