const fs = require("fs");
let directory = "textfiles";
let dirBuf = Buffer.from(directory);
/*prints the files inside textfiles folder*/

let files = fs.readdirSync(directory);
console.log(files);

/*fs.readdir(dirBuf, (err, files) => {
  if (err) {
    console.log("err.message");
  } else {
    console.log(files);
  }
});*/
