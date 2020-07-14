const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();



// ????? 4. Create the`router` for the app, and export the`router` at the end of your file.

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});









module.exports = router;