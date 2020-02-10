const fs = require("fs");

console.log("Reading Starts!");
fs.readFile("Message.json", (err, data) => {
  if (err) throw err;
  let hoi = JSON.parse(data);
  console.log(hoi);
});

/*Prints JSON formatted output to console

const fs = require("fs");
var data = require("./Message.json");
console.log(data);

https://jsonformatter.curiousconcept.com/
let fs = require("fs");
let rawdata = fs.readFileSync("Message.json");
let hoi = JSON.parse(rawdata);
console.log(hoi);
*/
