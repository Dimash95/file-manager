const fs = require("fs");
const path = require("path");

function cat(filePath) {
  const fullPath = path.resolve(process.cwd(), filePath);

  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    console.log(`File does not exist: ${filePath}`);
    return;
  }

  const readStream = fs.createReadStream(fullPath, "utf8");

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("error", (err) => {
    console.error(`Error reading file: ${err.message}`);
  });
}

module.exports = {
  cat,
};
