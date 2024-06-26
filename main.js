const execSubdomains = require("./module/subdomains");
const execDirsearch = require("./module/dirsearch");
const execHttpx = require("./module/httpx");

function main() {
  execSubdomains()
    // .then(() => execDirsearch())
    .then(() => execHttpx());
}

main();
