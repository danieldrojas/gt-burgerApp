const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();



// ????? 4. Create the`router` for the app, and export the`router` at the end of your file.

router.get("/", function (req, res) {
    burger.all(function (data) {
        //console.log("this is the data", data)
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/", function (req, res) {
    // Test it
    const value = req.body.burger;
    console.log('You sent, ' + value);

    burger.insert("burger_name =", value  ,function (data) {
        //console.log("This is my data: ", data);
        res.redirect("/");

    })
    
});

router.put("/api/burgers/:id", function (req, res) {
    // Test it
    const value = req.params.id
    console.log('You sent, ' ,value);

    burger.update("devoured", true, " id =  " + value, function (data) {
        console.log("This is my data: ", data);
        res.send("update happend");

    })

});
// (colName, value, condition, cb) 




module.exports = router;