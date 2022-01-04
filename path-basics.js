const path = require("path");

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

module.exports = {filePath: filePath, base: base, absolute: absolute}