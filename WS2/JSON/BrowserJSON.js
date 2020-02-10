const http = require("http");
const fs = require("fs");
var data = require("./Message.json");
/*This will print json file to browser with html tags*/

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write("<table border =1><tr>\n");
    for (var i = 0; i < data.length; i++) {
      response.write("<td>" + data[i].name);
      response.write("</td>\n<td>");
      response.write(data[i].country);
      response.write("</td>\n<td>");
      response.write(data[i].city);
      response.write("</td>\n<td>");
      response.write(data[i].message);
      response.write("</td>\n");
    }
    response.write("</tr>");
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
