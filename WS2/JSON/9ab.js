const fs = require("fs");

var data = require("./Message.json");
console.log("<table border =1><tr>");
for (var i = 0; i < data.length; i++) {
  console.log("<td>" + data[i].name + "</td>");
  console.log("<td>" + data[i].country + "</td>");
  console.log("<td>" + data[i].city + "</td>");
  console.log("<td>" + data[i].message + "</td>");

  /*
  this prints without html tags
  console.log(data[i].name);
  console.log(data[i].country);
  console.log(data[i].city);
  console.log(data[i].message);*/
}
console.log("</tr");
