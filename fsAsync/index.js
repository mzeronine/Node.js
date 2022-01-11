const fs = require("fs");

fs.writeFile("Botwrite.txt", "hello bots", (err) => {
    console.log("covered");
});

//fs.appendFile("Botwrite.txt", "Added new", (err) => {
  //      console.log("Updated error");
     
//});

fs.readFile("Botwrite.txt", "UTF-8", (err, data) => {
    console.log(data);
});