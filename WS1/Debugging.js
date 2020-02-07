var fs = require("fs");
console.log("Start program.");
/*I want to do some debugging
you can use breakpoints and inspect in 
crome developer tools, 
node--debug-brk--inspect "file" 
copy the address and check
UUID problems?*/
var data1 = fs.readFileSync("test.txt");
var data2 = fs.readFileSync("test2.txt");

fs.writeFileSync("newFile.txt", data1);
fs.appendFileSync("newFile.txt", data2);

console.log("Printing the text:");
