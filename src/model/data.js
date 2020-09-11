const mongoose = require("mongoose");

const data =  new mongoose.Schema({

    number1 : {
        type: String,
        required: true
    },
    number2 : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Data", data);