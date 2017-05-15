"use strict";

module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        var tables = [];
        for (var i = 0; i < 5; i++) {
            tables.push(tablesArray[i]);
        }
        // console.log(tables);
        res.json(tables);
    });

    app.get("/api/waitlist", function(req, res) {
        var waitList = [];
        for (var i = 5; i < tablesArray.length; i++) {
           if (!null) waitList.push(tablesArray[i]);
        }
        // console.log(waitList);
        res.json(waitList);
    });

    app.post("/api/tables", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        var newTable = req.body;

        // console.log(newTable);
        // console.log("tables");

        // We then add the json the user sent to the character array
        tablesArray.push(newTable);

        // We then display the JSON to the users
        res.json(newTable);
    });
}
