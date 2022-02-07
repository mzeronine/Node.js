const chalk = require("chalk");
console.log(chalk.green("Success"));

const validator = require("validator");
const res = validator.isEmail("meghan.com");
console.log(res ? chalk.green(res) : chalk.red(res));
const pho = validator.isMobile("99889");
console.log(pho ? chalk.green(pho) : chalk.red(pho));