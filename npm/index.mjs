
import chalk from "chalk";
import validator from "validator";

 const res=validator.isEmail("ssnehabr.mom"); //=> true
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));