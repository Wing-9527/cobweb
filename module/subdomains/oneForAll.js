const { exec } = require("child_process");
const { inputPath, outputPath, oneforallPath } = require("../../config/config"); // config
const { progress } = require("../../utils/index");

let command = `python ${oneforallPath} --targets ${inputPath} --path ${outputPath} --fmt json run`;

/**
 * @returns {Promise}
 * 
 */
function execOneforAll() {
  let childProgress = exec(command);
  // let childProgress = exec("ping baidu.com");
  return progress("OneForAll", childProgress);
}

module.exports = execOneforAll;
