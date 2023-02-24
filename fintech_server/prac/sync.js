let fs = require("fs");
console.log("A");
let result = fs.readFileSync("./text.txt", "utf8");
console.log(result);
console.log("C");
