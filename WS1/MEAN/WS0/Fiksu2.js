var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    if (request.url === "/" || request.url === "/home") {
      response.write(`
    <h3>MEAN</h3><br>
    <table border='1'bgcolor='#6495ED'>
    <tr>
    <td>M</td>
    <td>MongoDB</td>
    <td>tietokantaohjelmisto</td>
    </tr>
    <tr>
    <td>E</td>
    <td>Express.js</td>
    <td>web framework for Node.js</td>
    </tr>
    <tr>
    <td>A</td>
    <td>Angular</td>
    <td>Framework,ohjelmistokehitys</td>
    </tr>
    <tr>
    <td>N</td>
    <td>Node.js</td>
    <td>Palvelin</td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td><a href="http://127.0.0.1:8081/about">About</td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td><a href="https://devcenter.heroku.com/articles/mean-app-restful-api">Read More</td>
    </tr>
    </table>`);
    } else if (request.url == "/about") {
      response.write(`<div style="background-color:lightblue">
 <br><h3>About MEAN</h3><br>
 <p>Learn the basic stuff first!</p>
 </div>
 <div style="background-color:gray">
 <br><h4>Here we start with node.js</h4><br>
 <h4><a href="http://127.0.0.1:8081/home">Home</h4>
 </div>
 `);
    }

    response.end("This is the end!");
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
