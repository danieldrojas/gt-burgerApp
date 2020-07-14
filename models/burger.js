const orm = require("../config/orm.js");




let burger = {

    all: function (cb) {

        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },

    insert: function (colName, value, cb) {
        orm.insertOne("burgers", colName, value, function (res) {
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