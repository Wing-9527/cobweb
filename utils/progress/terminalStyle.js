let chalk = require("chalk");

function terminalStyle(name, type, line) {
  let println = chalk.bgBlue(name) + chalk.bold(` ${type}: \n`);
  if (name === "OneForAll") {
    if (line.includes("ALERT")) {
      // alert print yellow color
      println += chalk.yellow(line);
    } else if (line.includes("ERROR")) {
      // error print red color
      println += chalk.red(line);
    } else {
      // default print green color
      println += chalk.green(line);
    }
  } else {
    println += chalk.green(line);
  }
  console.log(println);
}

module.exports = terminalStyle;
