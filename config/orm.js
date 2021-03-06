const  connection  = require("../config/connection.js")

//select method
var orm = {
    selectAll: function (tableName, cb) {
        const queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        
        });

    },
    insertOne: function (tableName, colName, value, cb) {
        let queryString = "INSERT INTO " + tableName + " SET " + colName + "'" + value + "'";
        console.log('THIS IS OUR QUERY!!', queryString)
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (tableName, colName, value, condition,  cb) {
        let queryString = "UPDATE "; queryString += tableName;
        queryString += " SET ";
        queryString += colName;
        queryString += " = ";
        queryString +=  value;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            console.log('IN .then OF CONNECTION QUESRY FOR UPDATE!!!!!!!!!!!!')
            if (err) throw err;
            cb(result);
        });
    }
};


        



module.exports = orm;