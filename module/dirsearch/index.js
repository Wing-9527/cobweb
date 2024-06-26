const { execSync, exec } = require("child_process");
const {
  dirsearchPath,
  finalSubdomainsPath,
  dirsearchOutputPath,
} = require("../../config/config"); // config
// const { printExecEnd } = require("../../utils/index");
const genFinalDirsearch = require("./utils/genFinalDirsearch");
const { progress } = require("../../utils/index");

let command = `python ${dirsearchPath} -l ${finalSubdomainsPath} -o ${dirsearchOutputPath} --time=6 --random-agent --proxy=127.0.0.1:7890`;

/**
 * @returns {Promise}
 */
function execDirsearch() {
  // return new Promise((resolve) => {
  //   try {
  //     // console.log(command);
  //     execSync(command);
  //     printExecEnd("Dirsearch");
  //     genFinalDirsearch();
  //     resolve("Dirsearch");
  //   } catch (e) {
  //     throw e;
  //   }
  // });
  // let command = "echo dirsearch";
  console.log(command);
  let childProgress = exec(command);
  return progress("Dirsearch", childProgress).then(() => genFinalDirsearch());
}

module.exports = execDirsearch;
