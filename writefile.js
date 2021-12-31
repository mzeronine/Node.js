const fs =  require("fs");

//
//fs.writeFileSync("read.txt", "Welcome here");

fs.writeFileSync("read.txt", "Hello, Welcome here");

fs.appendFileSync("read.txt", " adding data in file" );

const buf_data = fs.readFileSync("read.txt");

org_data = buf_data.toString();

console.log(org_data);

fs.renameSync("read.txt", "readwrite.txt");