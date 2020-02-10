let http = require("http");
let fs = require("fs");

http
  .createServer(function(request, response) {
    var content = "";
    var type = "";

    if (request.url === "/") {
      content = fs.readFileSync("./home.html");
      type = "text/html";
    } else if (request.url === "/frontpage") {
      content = fs.readFileSync("./frontpage.html");
      type = "text/html";
    } else if (request.url === "/contact") {
      content = fs.readFileSync("./contact.html");
      type = "text/html";
    } else if (request.url === "/json") {
      content = fs.readFileSync("./Message.json");
      type = "application/json";
    } else if (request.url === "/text") {
      content = fs.readFileSync("./test.txt");
      type = "text/plain";
    }

    response.writeHead(200, { "Content-Type": "type" });

    response.end(content + "\n");
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
