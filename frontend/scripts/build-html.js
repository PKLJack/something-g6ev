const ejs = require("ejs");
const fs = require("node:fs");
const path = require("node:path");

const { BACKEND_ORIGIN } = process.env;

if (!BACKEND_ORIGIN) {
  console.error("Environment Variable BACKEND_ORIGIN not set.");
  process.exit(-1);
}

console.table({ BACKEND_ORIGIN });

const frontendDir = path.dirname(__dirname);
const distDir = path.join(frontendDir, "dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

ejs.renderFile(
  path.join(frontendDir, "index.html"),
  { BACKEND_ORIGIN },
  function (err, str) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }

    fs.writeFileSync(path.join(distDir, "index.html"), str);
  },
);
