exports.getUser = function getUser(existingUser, callback) {

    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://Rii123:Rii123@desert-kyn4g.mongodb.net/Login.sample_users";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    client.connect(err => {
        const collection = client.db("Login").collection("sample_users");
        if (err) throw err;

        collection.find(existingUser).toArray(function (err, result) {
            if (err) throw err;
            //console.log("mongo.js: " + result);
            console.log(result.insertedCount);
            callback(err, result);
            //  client.close();
        });
    });
};

exports.addUser = function addUser(newUser, callback) {
    // Tuodaan moduuli ohjelmaan
    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://Rii123:Rii123@desert-kyn4g.mongodb.net/Login.sample_users";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    client.connect(err => {
        const collection = client.db("Login").collection("sample_users");
        if (err) throw err;


        collection.insertOne(newUser, function (err, result) {
            // Tulostetaan konsoliin tieto montako alkiota on lisätty (1)
            console.log(result.insertedCount);
            callback(err, result);
        });
    });
};