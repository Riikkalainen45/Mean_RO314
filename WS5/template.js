var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.locals.pretty = true;
/*you can print prettier json like:
app.set('json spaces',2)*/
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/about', function (req, res) {
    res.render('pages/about', {
        new_heading: "I changed this",
        new_content: "hello hello",
        new_footer: "New footer..."
    });
});

var data = {
    users: [
        { name: 'Riikka', age: '46' },
        { name: 'Emma', age: '18' },
        { name: 'Matti', age: '33' }
    ]
};
app.get('/users', function (req, res) {
    res.render('pages/users', data);
});

app.listen(8081);
console.log("Go to https://127.0.0.8081");