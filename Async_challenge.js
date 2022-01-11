const fs = require("fs");

fs.mkdir("Botfile_Practice", (err) => {
 

});

fs.writeFile("./Botfile_Practice/botfile.txt", "File and folder created by bot and, ", (err) => {
        
});

fs.appendFile("./Botfile_Practice/botfile.txt", "updating data", (err) => {

});

fs.readFile("botfile.txt", "utf-8", (err, data) =>{
            console.log(data);
            console.log("Reading completed...");
            
});     
console.log("Reading.....");


fs.rename("./Botfile_Practice/botfile.txt", "./Botfile_Practice/botfile1.txt", (err) => {
    console.log("Renamed");

});

fs.unlink("./Botfile_Practice/botfile1.txt", (err) => {

});

fs.rmdir("./Botfile_Practice", (err) => {
    console.log("Deleted");

});