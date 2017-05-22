"use strict";

var path = require("path");
var fs = require("fs");
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(data);
    });

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        var friendInfo = req.body;
        var readData = new Array();
        var dataToFile = "";
        var closestCompatibility = {};
        var closestMatch = 0;

        fs.readFile(__dirname +"/../data/friends.js", "utf8",function(err, data) {
          if (err) throw err;
            readData = Array.from(JSON.parse(data));
            for(var person in readData) {
              var result = 0;

              for (var answer in readData[person].answers) {
                result += Math.abs(friendInfo.answers[answer] - readData[person].answers[answer]);
              }
              if((closestMatch > result) || (person === "0")) {
                closestMatch = result;
                closestCompatibility =  Object.assign({},readData[person]);
              }
            }
            readData.push(friendInfo);
            dataToFile = JSON.stringify(readData);
            fs.writeFile(__dirname +"/../data/friends.js", dataToFile,'utf8', function(err) {
              if (err) throw err;
              res.json(closestCompatibility);
            });
        });
    });
}
