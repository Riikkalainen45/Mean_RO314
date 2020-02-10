/*writing JSON data to own file replacing old data!*/
const fs = require("fs");
let message = {
  name: "Liza",
  country: "China",
  city: "Wuhan",
  message: "Stuck here!"
};

let data = JSON.stringify(message, null, 2);
fs.writeFile("Message2.json", data, err => {
  if (err) throw err;
  console.log("Data added?");
});
