var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const bcrypt = require("bcrypt");
const saltRounds = 10;

var port = process.env.PORT || 8081;
//MODUULI TUODAAN
var mongo = require("./moduli/mongo");

app.listen(8081, () => {
    // Luodaan reitit ja niiden toiminnallisuudet
    app.use(express.static('public'));
    app.locals.pretty = true;

    app.get('/', function (req, res) {
        res.render('pages/index');
    });
    app.get('/welcome', function (req, res) {
        res.render('pages/app');
    });
    app.get('/register', function (req, res) {
        res.render('pages/input');
    });

    //input.ejs register uusi käyttäjä...
    app.post("/newuser", (req, res) => {

        var password = req.body.password;
        var newpass = bcrypt.hashSync(password, saltRounds);
        /* bcrypt.hash(password, saltRounds, function (err, hash) {
             if (err) throw err;
             */
        var newUser = {
            email: req.body.email,
            password: newpass //req.body.password
        };
        var result = mongo.addUser(newUser, function (err, r) {
            if (err) throw err;

            if (r.insertedCount == 1) {
                res.redirect("/");
            } else {
                res.send("Lisääminen ei onnistunut?" + r.insertedCount);
            }

            // var newpass = bcrypt.hashSync(password, saltRounds);
        });
    });
    //
    app.post("/log", (req, res) => {

        var password = req.body.password;

        var existingUser = {
            email: req.body.email,
            // password: req.body.password
        };


        var result = mongo.getUser(existingUser, function (err, result) {
            if (err) throw err;
            console.log("getUser result: ");
            console.log(result);

            // Jos tulosriviä ei löydy, niin käyttäjää ei ole
            if (result.length == 0) {
                res.send("Käyttäjää ei löydy!");
            }
            else if (bcrypt.compareSync(password, result[0].password)) {
                //  else if (bcrypt.compareSync(password, result[0].password)) {
                // else if (req.body.password == result[0].password) {
                // jos ok,  ohjataan käyttäjä kirjautuneiden alueelle
                console.log("Vertailu ok, salasanat samat.");
                res.render("pages/app", { data: result });
                //other problems
            } else res.send("Virheellinen tunnus/salasana!");
        });
    });
    app.get("*", function (req, res) {
        res.status(404).send("Cant find the requested page");
    });
});




