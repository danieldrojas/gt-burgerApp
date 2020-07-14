const orm = require("../config/orm.js");




let burger = {

    all: function (cb) {

        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },

    insert: function (value, cb) {
        orm.insertOne("burgers", value, function (res) {
            cb(res);
        })
    },
    update: function (colName, value, condition, cb) {
        orm.updateOne("burgers", colName, value, condition, function (res) {
            cb(res);
        })
    }


};

module.exports = burger;