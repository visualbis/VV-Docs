const fs = require("fs");
fs.writeFileSync("./static/CNAME", "docs.bihub.com");
console.log("cname removed")