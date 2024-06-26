const chalk = require("chalk");

/**
 * @param {String} name
 */
function printExecEnd(name) {
  console.log(chalk.bgMagenta(`${name} 执行完毕`));
}

module.exports = printExecEnd;
