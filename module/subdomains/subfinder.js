const { exec } = require("child_process");
const { inputPath, outputPath, subfinderPath } = require("../../config/config"); // config
const { progress } = require("../../utils");

let command = `${subfinderPath} -dL ${inputPath} -oD ${outputPath}`;

/**
 * @returns {Promise}
 */
function execSubfinder() {
  let childProgress = exec(command);
  // let childProgress = exec("ls");
  return progress("Subfinder", childProgress);
}

module.exports = execSubfinder;
