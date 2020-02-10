const fs = require("fs");
const createFile = "newFile2";

/*Creates folder and text file inside directory, 
writes text inside from test.txt file*/

fs.mkdirSync(createFile, 0o776);
var data1 = fs.readFileSync("test.txt");
fs.writeFileSync("newFile2/newFile.txt", data1);

/*
fs.rmdir removes chosen file and directory 
Does not find the file yet...

const fs = require("fs");
fs.rmdirSync("newFile2");*/
