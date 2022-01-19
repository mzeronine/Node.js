const path = require("path");

console.log(path.dirname('/Users/meghan/Desktop/Code/Wbsite/Node.js/Pathmodule/path.js'));
console.log(path.extname('/Users/meghan/Desktop/Code/Wbsite/Node.js/Pathmodule/path.js'));
console.log(path.basename('/Users/meghan/Desktop/Code/Wbsite/Node.js/Pathmodule/path.js'));

 console.log(path.parse('/Users/meghan/Desktop/Code/Wbsite/Node.js/Pathmodule/path.js'));

const myfavpath = path.parse(('/Users/meghan/Desktop/Code/Wbsite/Node.js/Pathmodule/path.js'));
console.log(myfavpath.name);