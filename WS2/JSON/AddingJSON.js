/*Adding JSON data to the file!*/
const fs = require("fs");
let message = {
  name: "Kim",
  country: "NorthKorea",
  city: "Pjonjang",
  message: "Stop whining!"
};

let data = JSON.stringify(message, null, 2);
fs.appendFile("Message2.json", data, err => {
  if (err) throw err;
  console.log("Data added?");
  console.log(data);
});
