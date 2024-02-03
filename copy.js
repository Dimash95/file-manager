const fs = require("fs");
const path = require("path");

// Copy a file
function copyFile(source, destination) {
  const srcPath = path.join(process.cwd(), source);
  const destPath = path.join(process.cwd(), destination);

  fs.copyFile(srcPath, destPath, (err) => {
    if (err) {
      console.error(`Error copying file: ${err}`);
      return;
    }
    console.log(`${source} was copied to ${destination}`);
  });
}

module.exports = {
  copyFile,
};
