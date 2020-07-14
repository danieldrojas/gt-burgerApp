const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();



// ????? 4. Create the`router` for the app, and export the`router` at the end of your file.

router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log("this is the data", data)
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/", function (req, res) {
    // Test it
    const value = req.body.burger;
    console.log('You sent, ' +  typeof value);
    burger.insert(value, function (data) {
        console.log("This is my data: ", data);
        res.redirect("/");

} )
    // Test it
    // return res.send('You sent, ' + req.body.task);

    // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
    // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
    // https://en.wikipedia.org/wiki/SQL_injection

    // burger.insert()
    // connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function (err, result) {
    //     if (err) throw err;

    //     res.redirect("/");
    // });
});







module.exports = router;