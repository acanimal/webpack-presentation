require("../css/style.css");
require("../css/app2.css");

console.log("Running app2...");

var content = require("./content.js");
var log = require("./log.js");

log("At app2...");
document.write(content.app2);
