const fs = require("fs");

fs.writeFile("Hello.txt", "This is bot", (err) => {
        console.log("Noted");
        console.log(err);
});

fs.readFile("Hello.txt", "UTF-8", (err, data) => {
        console.log(data);
        console.log("Reading Done");

});

fs.unlink("Hello.txt", (err) => {
        console.log("Deleted");

});