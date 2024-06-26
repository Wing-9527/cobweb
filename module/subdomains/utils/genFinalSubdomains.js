const fs = require("fs");
const { outputPath, finalSubdomainsPath } = require("../../../config/config");
const { printWriteEnd } = require("../../../utils/index");

/**
 * @returns {Array} subdomainList
 */
function handleOneForAllReports() {
  let fileList = fs.readdirSync(outputPath);
  let allSubFilename = fileList.filter((item) =>
    item.includes("all_subdomain")
  )[0];
  let allSubFilePath = `${outputPath}/${allSubFilename}`;
  let allSubBuffer = fs.readFileSync(allSubFilePath);
  let allSubJSON = JSON.parse(allSubBuffer);
  let subdomainList = [...new Set(allSubJSON.map((item) => item.subdomain))];
  // console.log(subdomainList);
  return subdomainList;
}

/**
 * @returns {Array} subdomainList
 */
function handleSubfinderReports() {
  let fileList = fs.readdirSync(outputPath);
  let subfinderReports = fileList.filter((item) => item.includes(".txt"));
  let subdomainList = [];
  subfinderReports.forEach((filename) => {
    let filePath = `${outputPath}/${filename}`;
    let fileBuffer = fs.readFileSync(filePath);
    let fileList = fileBuffer.toString().split(/\r?\n/);
    subdomainList = [...new Set([...subdomainList, ...fileList])];
  });
  // console.log(subdomainList);
  return subdomainList;
}

function genFinalSubdomains() {
  // setTimeout(() => {
  try {
    let subdomainList = [
      ...new Set([...handleOneForAllReports(), ...handleSubfinderReports()]),
    ];
    let content = subdomainList.join("\n");
    fs.writeFileSync(finalSubdomainsPath, content);
    printWriteEnd(finalSubdomainsPath);
    return "final_subdomains";
  } catch (e) {
    throw e;
  }
  // }, 10000);
}

module.exports = genFinalSubdomains;
