var express = require("express");
require("path");
var app = express();
var bodyParser = require("body-parser");
//require("/app/routing");

PORT = process.argv[2] || 8080;

app.use(express.static("app/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
