const fs = require("fs");
const {
  dirsearchOutputPath,
  finalDirsearchPath,
} = require("../../../config/config");
const { printWriteEnd } = require("../../../utils");

function genFinalDirsearch() {
  return new Promise((resolve) => {
    // RegExp
    // let matchFilenameRegexp = /(?:-u\s)(?<filename>.*)(?:\n)/;
    // let firstLineRegexp = /^\#.*\n\n/;
    let regexp = /(.)*(?=http)/gi;

    // handle file content
    let contentBuffer = fs.readFileSync(dirsearchOutputPath);
    let contentString = contentBuffer.toString();
    // let filename = contentString.match(matchFilenameRegexp)?.groups?.filename;
    // let outputName = `${subdomainsOutputPath}${filename}.txt`;
    // let result = contentString.replace(firstLineRegexp, "").replace(regexp, "");
    let result = contentString.replace(regexp, "");
    try {
      let msg = fs.writeFileSync(finalDirsearchPath, result);
      if (!msg) {
        printWriteEnd(finalDirsearchPath);
        resolve("final_dirsearch");
      }
    } catch (e) {
      throw e;
    }
  });
}

module.exports = genFinalDirsearch;
