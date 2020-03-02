var express = require("express");
var fs = require("fs");
var router = express.Router();
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public/demosite/"));

app.get("/html", function(req, res) {
  res.send("Hello World");
});

app.get("/list", function(req, res) {
  res.sendFile(__dirname + "/list.txt");
});

app.get("/json", function(req, res) {
  var data = require(__dirname + "/public/file.json");

  var output = '<table border= "5">';
  for (var i = 0; i < data.length; i++) {
    output +=
      "<tr>" +
      "<td>" +
      data[i].Name +
      "</td>" +
      "<td>" +
      data[i].Email +
      "</td>" +
      "<td>" +
      data[i].Company +
      "</td>" +
      "<td>" +
      data[i].Date +
      "</td>" +
      "</tr>";
  }
  res.send(output);
});

// Open form
app.get("/add", function(req, res) {
  res.sendFile(__dirname + "/public/adduser.html");
});
//form has post /add fundtions to send data back
/*
app.post("/add", function(req, res) {
  var data = "";
  data += req.body.name + "n";
  data += req.body.email + "n";
  data += req.body.company + "n";
  console.log(data);
  res.send(data);
});
*/
app.post("/add", function(req, res) {
  var data = require("./public/file.json");

  data.push({
    Name: req.body.name,
    Email: req.body.email,
    Company: req.body.company,
    Date: new Date()
  });

  var lol = JSON.stringify(data);

  fs.writeFile("public/file.json", lol, err => {
    if (err) throw err;
    console.log("Saved info");
  });
  res.send("Saved atleast nameData Where to ADD for loop NO IDEA!");
});

/*
app.get("/add", function(req, res) {
  var data = require("./public/file.json");

  data.push({
    Name: "Toinen Riikka",
    Company: "Tylypahka",
    Email: "hoi@tyly.com",
    Date: "15/02/2020 \r\n"
  });
  var lol = JSON.stringify(data);

  fs.writeFile("public/file.json", lol, err => {
    if (err) throw err;
    console.log("Saved info");
  });
  res.send("saved data to file.json");
});
*/
app.get("*", function(req, res) {
  res.send("Page not found", 404);
});

app.listen(8081, function() {
  console.log("Listening port http://127.0.0.1:8081");
});
