var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

PORT = process.argv[2] || 8080;
app.use(express.static(path.join(__dirname, "/app/public")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
//app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
