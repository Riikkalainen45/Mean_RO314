var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.locals.pretty = true;
var port = process.env.PORT || 8081;

const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://Rii123:Rii123@desert-kyn4g.mongodb.net/Login.sample_users";
//const uri = "mongodb + srv://Rii123:"+password+"@desert-kyn4g.mongodb.net/test";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    const collection = client.db("Login").collection("sample_users");
    if (err) throw err;

    app.listen(8081, () => {
        // Luodaan reitit ja niiden toiminnallisuudet
        app.use(express.static('public'));

        app.get('/', function (req, res) {
            res.render('pages/index');
        });
        app.get('/welcome', function (req, res) {
            res.render('pages/app');
        });

        app.get('/register', function (req, res) {
            res.render('pages/input');
        });
        app.post("/newuser", (req, res) => {
            var email = req.body.email;
            var password = req.body.password;
            var password2 = req.body.password2;
            console.log(email + password + password2);
            var newUser = {
                email: req.body.email,
                password: req.body.password
            };
            if (password === password2) {
                collection.insertOne(newUser, function (err, r) {
                
                    console.log(r.insertedCount);
                    res.redirect("welcome"); 
            
             }
                )};
            console.log("wrong");
        });
   
    app.post("/log", (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        console.log(email + password);

        collection.find(email).toArray(function (err, results) {
            if (email !== email){
            res.redirect("register");
           }
        });
       res.redirect("welcome");
    });
/*
    function checkAuthenticated(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    }
    var query = {
            password: password1
        };
    */
    app.get("*", function (req, res) {
        res.status(404).send("Cant find the requested page");
    });
});
});
 /* 
     app.post("/log", function (req, res) {
         console.log(req.body);
         var email = req.body.email;
         var password = req.body.password;
     
         if (email === "hessu@hopo.fi" && password === "aku") {
             res.redirect("/welcome");
         }
     });
     
         if (email === "hessu@hopo.fi" && password === "aku") {
             res.send("welcome", 301);
         } else res.send("wrong", 200);
     });
     */



