var fs = require("fs");
console.log("Start program.");
/*Here program reads text, when ready 
call back function- prints the text Asynchronously */
fs.readFile("test.txt", results);

for (var i = 0; i < 15; i++) {
  console.log("reading... reading...");
}
function results(err, data) {
  if (err) return console.error(err);
  console.log("Printing the text:");
  console.log(data.toString());
}
console.log("Ready!");
