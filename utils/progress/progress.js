const readline = require("readline");
const terminalStyle = require("./terminalStyle");
const printExecEnd = require("../printExecEnd");

/**
 *
 * @param {String} name
 * @param {ChildProcess} childProgress
 * @returns {Promise}
 */
function progress(name = "", childProgress) {
  return new Promise((resolve) => {
    // readline
    //   .createInterface({
    //     input: childProgress.stdout,
    //     terminal: false,
    //   })
    //   .on("line", (line) => {
    //     terminalStyle(name, "stdout", line);
    //   });

    // readline
    //   .createInterface({
    //     input: childProgress.stderr,
    //     terminal: false,
    //   })
    //   .on("line", (line) => {
    //     terminalStyle(name, "stderr", line);
    //   });

    childProgress.stdout.on("data", (data) => {
      terminalStyle(name, "stdout", data);
    });

    childProgress.stderr.on("data", (data) => {
      terminalStyle(name, "stderr", data);
    });

    // 监听子进程关闭事件
    childProgress.on("close", (code) => {
      printExecEnd(name);
      resolve(name);
    });
  });
}

module.exports = progress;
