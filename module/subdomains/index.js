const execOneforAll = require("./oneForAll");
const execSubfinder = require("./subfinder");
const { genFinalSubdomains } = require("./utils/index");

/**
 * @description 执行 OneForAll > Subfinder > 生成 final_subdomains.txt
 * @returns {Promise}
 */
function execSubdomains() {
  return execOneforAll()
    .then(() => execSubfinder())
    .then(() => genFinalSubdomains());
}

module.exports = execSubdomains;
