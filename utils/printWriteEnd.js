const chalk = require("chalk");

/**
 * @param {String} name
 */
function printWriteEnd(name) {
  console.log(chalk.bgGreen(`${name} 写入成功`));
}

module.exports = printWriteEnd;
