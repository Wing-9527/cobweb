let { resolve, join } = require("path");

let rootPath = resolve(__dirname, "..");

// 工具路径 环境变量
let oneforallPath = "D:\\OneForAll\\oneforall.py"; // OneForAll工具路径
let subfinderPath = "D:\\Go\\soft\\bin\\subfinder.exe"; // subfinder 工具路径
let dirsearchPath = "D:\\dirsearch\\dirsearch.py"; // dirsearch 工具路径
let httpxPath = "D:\\httpx\\cmd\\httpx\\httpx.exe"; // httpx 工具路径

let inputPath = join(rootPath, "/config/domains.txt"); // 网站原始域名输入路径
let outputPath = join(rootPath, "/module/subdomains/reports"); // 网站子域名输出路径（OneForAll、Subfinder）
let finalSubdomainsPath = join(
  rootPath,
  "/module/subdomains/reports/final_subdomains.txt"
); // 处理完毕的最终子域名集合路径
let dirsearchOutputPath = join(
  rootPath,
  "/module/dirsearch/reports/dirsearch.txt"
); // dirsearch扫描结果输出
let finalDirsearchPath = join(
  rootPath,
  "/module/dirsearch/reports/final_dirsearch.txt"
); // 处理 dirsearch 结果输出路径
let httpxOutputPath = join(rootPath, "/module/httpx/reports/httpx.html"); // httpx探活输出路径

module.exports = {
  oneforallPath,
  subfinderPath,
  dirsearchPath,
  httpxPath,
  inputPath,
  outputPath,
  finalSubdomainsPath,
  dirsearchOutputPath,
  finalDirsearchPath,
  httpxOutputPath,
};
