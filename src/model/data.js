const mongoose = require("mongoose");

const data =  new mongoose.Schema({

    number : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Data", data);