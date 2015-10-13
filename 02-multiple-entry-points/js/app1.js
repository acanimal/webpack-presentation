require("../css/style.css");

console.log("Running app1...");

var content = require("./content.js");
var log = require("./log.js");

log("At app1...");
document.write(content.app1);
