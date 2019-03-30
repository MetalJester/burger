var connection = require("../config/connection");

var orm = {
    // ORM method to selectAll()
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    // ORM method to insertOne()


    // ORM method to updateOne()


}



// export ORM object
module.exports = orm;