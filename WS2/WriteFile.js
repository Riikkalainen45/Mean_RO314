var fs = require("fs");
var data = "... Ja niin se vaan on!";

fs.writeFileSync("Kirjoittaminen.txt", data);
fs.appendFileSync("Kirjoittaminen.txt", "The End.");

//fs.rename('mynewfile.txt', 'myrenamedfile.txt', function (err){});
//fs.writeFile("test.txt","hello world!", function(err){ )
//fs.appendFile('test.txt','\nTämä teksti lisätään loppuun',function(err))
