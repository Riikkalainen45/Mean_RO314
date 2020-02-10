var fs = require("fs");
console.log("Delting file");
/* This will delete file newFile.txt*/
fs.unlink("newFile.txt", function(err, data) {
  if (err) throw err;
  console.log("File deleted");
});
