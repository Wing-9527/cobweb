const { execSync } = require("child_process");
const {
  httpxPath,
  finalSubdomainsPath,
  httpxOutputPath,
} = require("../../config/config"); // config
const { printExecEnd } = require("../../utils/index");

let command = `${httpxPath} -l ${finalSubdomainsPath} -o ${httpxOutputPath} -html`;

/**
 * @returns {String}
 */
function execHttpx() {
  try {
    execSync(command);
    printExecEnd("Httpx");
    return "Httpx";
  } catch (e) {
    throw e;
  }
}

module.exports = execHttpx;
