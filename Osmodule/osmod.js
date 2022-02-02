const os = require("os");

console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());

const freeMemory = os.freemem();
const totalMemory = os.totalmem();

console.log(`${freeMemory / 1024 / 1024 / 1024}`);
console.log(`${totalMemory / 1024 / 1024 / 1024}`);
