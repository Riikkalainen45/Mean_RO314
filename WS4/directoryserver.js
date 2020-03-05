var express = require("express");
var fs = require("fs");
var router = express.Router();
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public/demosite/"));

app.get("/html", function (req, res) {
  res.send("Hello World");
})

app.get("/list", function (req, res) {
  res.sendFile(__dirname + "/list.txt");
});
/*
app.get("/json", function (req, res) {
  var data = require("/public/file.json");
  res.json(data);
});
*/
app.get("/json", function (req, res) {
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
app.get('/add', function (req, res) {
  res.sendFile(__dirname + "/public/adduser.html");
});
//form has post /add fundtions to send data back
/*
app.post('/add', function (req, res) {
  var data = "";
  data += req.body.name + "\n";
  data += req.body.email + "\n";
  data += req.body.company + "\n";
  console.log(req.body);
  res.send(data);
});
*/
app.post("/add", function (req, res) {
  var data = require("./public/file.json");
  //console.log(req.body);

  data.push({
    "Name": req.body.name,
    "Company": req.body.company,
    "Email": req.body.email,
    "Date": new Date()
  });

  var lol = JSON.stringify(data)

  fs.writeFile("public/file.json", lol, err => {
    if (err) throw err
    console.log("Saved info");
  });
  res.send(data);
});

/*
app.get("/adduser", function (req, res) {
  var data = require("./public/file.json");

  data.push({
    Name: "Marilyn",
    Company: "Hollywood",
    Email: "studio@hei.com",
    Date: "11/02/2020 \r\n"
  });
  var lol = JSON.stringify(data);

  fs.writeFile("public/file.json", lol, err => {
    if (err) throw err;
    console.log("Saved info");
  });
  res.send("saved data to file.json");
});
*/
app.get("*", function (req, res) {
  res.send("Page not found", 404);
})

app.listen(8081, function () {
  console.log("Listening port http://127.0.0.1:8081");
});
