//TODO: 待办。 路由自动化管理

let colors = require("colors")
console.log("Generator Router Tree...".blue);

let path = require("path");
let fs = require("fs");

const files = fs.readFileSync("../");

console.log(`${files}`.underline.yellow);
// let filesNameList = [];
// let current = 0;

// let mapDeep = {};