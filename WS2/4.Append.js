var fs = require("fs");
console.log("Start program.");
fs.writeFileSync("newFile.txt", "THIS IS MY FIRST COMMENT!\n");
var data1 = fs.readFileSync("test.txt");
var data2 = fs.readFileSync("test2.txt");

fs.appendFileSync("newFile.txt", data1);
fs.appendFileSync("newFile.txt", data2);
fs.appendFileSync("newFile.txt", "THIS IS MY SECOND COMMENT!");

console.log("Printing the text:");
