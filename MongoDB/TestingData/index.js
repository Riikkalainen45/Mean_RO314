var express = require("express");
var app = express();
const MongoClient = require("mongodb").MongoClient;

//const password = "Rii123";
const uri = "mongodb+srv://Rii123:Rii123@desert-kyn4g.mongodb.net/sample_mflix.movies";
//const uri = "mongodb + srv://Rii123:"+password+"@desert-kyn4g.mongodb.net/test";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
/*ADD MOVIE:
var lisäys = {
    title: "Huhtikuu 2020"
};
var newMovie = {
    title: "Huhtikuu 2020",
    year: "2020",
    imdbID: "87654321",
    type: "series",
    poster: "https://cdn.pixabay.com/photo/2020/03/18/19/03/man-4945224__340.jpg"
};
client.connect(err => {
    const collection = client.db("sample_mflix").collection("movies");
    if (err) throw err;
    collection.insertOne(newMovie, function (err, r) {
        console.log(r.insertedCount);
    });
    .find(lisäys)  
    UPDATE:
     collection.updateMany(
        { title: /Game of/ },
        { $set: { year: 2020 } },
        function (err, r) {
            console.log("Changed rows:" + r.modifiedCount);
        }
    );
      collection
        .find(query)
        .limit(5)
        .toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
        });
});
taskkill/im node.exe /F -Just for my info...
 */

//KYSELY:
var query = {
    title: /Game of/
};
client.connect(err => {
    const collection = client.db("sample_mflix").collection("movies");
    if (err) throw err;

    app.listen(8081, () => {
        // Luodaan reitit ja niiden toiminnallisuudet
        app.get("/", function (req, res) {
            res.send("Hello World!");
        });

        app.get("/leffat", (req, res) => {
            collection.find(query).toArray(function (err, results) {
                console.log(results);
                var html = parse(results);
                res.send(html);
            });
            function parse(data) {
                var html = "<table border='1'>";
                for (var i = 0; i < data.length; i++) {
                    html += `<tr>
                               <td>${data[i].title}</td>
                               <td>${data[i].year}</td>
                               <td><img src='${data[i].poster}' height='30%'></td>
                           </tr>`;
                }
                html += "</table>";
                return html;
            }
        });
    });
});


