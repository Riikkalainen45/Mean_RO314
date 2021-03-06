var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.locals.pretty = true;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get("/guestbook2", function (req, res) {
    var data = require(__dirname + "/public/guestbook.json");

    var output = '<table border= "5" bgcolor="lightgrey" rowspan="2">';

    for (var i = 0; i < data.length; i++) {
        output +=
            "<tr>" +
            '<td>' +
            "Our visitor: " +
            data[i].username +
            "</td>" +
            '<td>' +
            "From: " +
            data[i].country +
            "</td>" +
            '<td bgcolor="grey">' +
            "Commented following: " +
            data[i].message +
            "</td>" +

            '<td>' +
            data[i].date +
            "</td>" +
            "</tr>";
    }
    res.send(output);
});



app.get('/message', function (request, response) {

    response.render('pages/message', {
        data: [
            { username: 'Isabel', country: 'France', message: 'Salut, Tuusula is worth visiting!' },
            { username: 'Juan', country: 'Spain', message: 'Nice people, good and healthy food' },
            { username: 'Marilyn', country: 'USA', message: 'Great nature, good hiking!' }
        ]
    });
});
/*
data
var dataa = require(__dirname + "/public/guestbook.json");
data= JSON.parse(dataa);
app.get('/message', function req, res){
    res.render('pages/message',{
        data
    })
}
TRIED TO GET JSON DATA AND RENDER IT TO MESSAGE.EJS
       <ul>
           <% users.forEach(function(user){ %>
             <%= user.username %>
           <% })%>
         </ul>
         */

app.get('/input', function (req, res) {
    res.render('pages/input');
});

app.post("/newmessage", function (req, res) {
    var data = require("./public/guestbook.json");

    data.push({
        'username': req.body.username,
        'message': req.body.message,
        'country': req.body.country
    });

    var lol = JSON.stringify(data)

    fs.writeFile("public/guestbook.json", lol, err => {
        if (err) throw err
        console.log("Saved info");

    });
    res.send(data);
    window.location.replace("/guestbook");
});
/*
var input = {
    user: [
        { name: '', country: '', message: '' }
    ]
};
app.get('/message', function (req, res) {
    res.render('pages/users', data);
});
*/
app.listen(8081);
console.log("Go to https://127.0.0.8081");