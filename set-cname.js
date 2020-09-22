const fs = require("fs");
fs.writeFileSync("./static/CNAME", "staging.docs.bihub-new.com");
console.log("cname removed")