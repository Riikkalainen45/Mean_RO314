const fs = require("fs");

fs.copyFile("test.txt", "Write.txt", err => {
  if (err) throw err;
  console.log("test.txt was copied to Write.txt");
  fs.appendFileSync("Write.txt", "The End.");

  fs.appendFile("Write.txt", "test2.txt", err => {
    if (err) throw err;
    console.log("test2.txt was copied to Write.txt");
  });
});

/*const fs = require("fs");
const past = requre("path");
const files = [f1, f2];

function copyFile(test, destination) {
  const input = fs.createReadStream(source);
  const output = fs.createWriteStream(destination);
  return new Promise((resolve, reject) => {
    output.on("error", reject);
    input.on("error", reject);
    input.on("end", resolve);
    input.pipe(output);
  });
}
/*
 var fs = require("fs");
    fs.readFile('test.txt',function(err, data){
        fs.writeFile('newTest.txt', data)
    });
fs.readFile("test.txt", function(err, content) {
  fs.writeFile("newFile.txt", "test,txt", content, function(err) {
    fs.readFile("test2.txt", function(err, content) {
      fs.writeFile("newFile.txt", "test2,txt", content, function(err) {
        if (err) {
          throw new Error();
        }

        /*   fs.appendFile("newFile.txt", content2, err => {
      if (err) {
        console.log("tokan tekstin kirjoitus ong");
        return;
      });
    });
  });
});*/
