var fs = require("fs");
console.log("Start!\n");
/*Here program reads text, when ready 
call back function- prints the text Asynchronously */
fs.readFile("test.txt", results);
fs.readFile("test2.txt", results2);

function results(err, data1) {
  if (err) return console.error(err);
  console.log("Printing the text1:");
  console.log(data1.toString());
}
function results2(err, data2) {
  if (err) return console.error(err);
  console.log("Printing the text2:");
  console.log(data2.toString());
}
console.log("Done!");
