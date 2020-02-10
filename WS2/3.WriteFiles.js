var fs = require("fs");
console.log("Start program.");
/*This program prints 2 files to newFile 
and if no file newFile is created
replaces the existing text in the file */
var data1 = fs.readFileSync("test.txt");
var data2 = fs.readFileSync("test2.txt");

fs.writeFileSync("newFile.txt", data1);
fs.appendFileSync("newFile.txt", data2);

console.log("Printing the text:");
