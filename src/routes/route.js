const express = require("express");

const router = express.Router();

const bodyparser = require("body-parser");
const control = require("../controller/control")
const async = require("async");
router.use(bodyparser.json());

router.post("/find", control.calculate);

router.get("/find", async(req,res) => {
    res.send("Find Get Work Excellent");
})

module.exports = router;