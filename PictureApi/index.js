
var http = require("http");
var express = require("express");
var app = express();


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/PictureApi.html");
});


app.listen(8081, function () {
    console.log("Listening port http://127.0.0.1:8081");
});
/*
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("OnLive");
});
*/
