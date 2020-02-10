var http = require("http");
var fs = require("fs");
var directory = "textfiles";
var dirBuf = Buffer.from(directory);
//En saa readdir infoa näkymään browserissa?

http
  .createServer(function(req, res) {
    fs.readdir(dirBuf, function(err, files) {
      res.writeHead(200, { "Content-Type": "text" });
      res.write(files);
      return res.end();
    });
  })
    .listen(8081);
console.log('server http://127.0.0.1.8081/');
