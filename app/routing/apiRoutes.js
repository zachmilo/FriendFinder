"use strict";

var path = require("path");
var	fs = require("fs");
var pg = require("pg");
// var config = require("../../config.js").config;

var data = [ {"name":"Ahmed", "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg", "scores":[5,1,4,4,5,1,2,5,4,1]} ];

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      console.log("test");
        res.json(data);
    });

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        var newTable = req.body;
        console.log(newTable);

        // We then add the json the user sent to the character array
        data.push(newTable);

        // We then display the JSON to the users
        console.log(data);
        res.json(data);
        //remember to turn this into jason
    });
}
