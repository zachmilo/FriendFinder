"use strict";

var path = require("path");
var fs = require("fs");
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      console.log("test");
        res.json(data);
    });

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        var friendInfo = req.body;
        var dataToFile = JSON.stringify(friendInfo)+",\n";
    
        fs.appendFile(__dirname +"/../data/friends.js", dataToFile, function(err) {
          if (err) throw err;
            console.log('The "data to append" was appended to file!');
          });
        console.log(friendInfo);
        res.json(friendInfo);
    });
}
