const fs = require("fs");

fs.writeFile("Botwrite.txt", "hello bots", (err) => {
    console.log("covered");
});