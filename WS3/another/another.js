var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/Kuvanak.html");
});

app.listen(8081);
console.log("http://127.0.0.1:8081");
