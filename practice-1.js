const fs =  require("fs");
// const folderName = '/Users/meghan/Desktop/bot-folder'

fs.mkdirSync("Botfolder");
fs.writeFileSync("./bot-writter.txt", "Created");
fs.appendFileSync("./bot-writter.txt", " & Deleted by bot ");
const data = fs.readFileSync("./bot-writter.txt", "utf8" );
console.log(data);

fs.renameSync("./bot-writter.txt", "Botfile");
fs.unlinkSync("./Botfile");
fs.rmdirSync("Botfolder");