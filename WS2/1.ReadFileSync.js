var fs = require("fs");
/*Here program is done first- when done prints test.txt-file to console  */
console.log("Here we go!");
var data = fs.readFileSync("test.txt");
console.log(data.toString());

for (var i = 0; i < 15; i++) {
  console.log("Node reading...");
}
console.log("This is the end.");
