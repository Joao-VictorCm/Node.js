const fs = require("fs");

fs.writeFile("message.txt", "aqui", (err) => {
  if (err) throw err;
  console.log("saved");
});

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
