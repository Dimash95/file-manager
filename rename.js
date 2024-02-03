const fs = require("fs");
const path = require("path");

function renameFile(oldPath, newName) {
  const currentPath = path.join(process.cwd(), oldPath);
  const newPath = path.join(process.cwd(), newName);

  // Check if the original file exists
  if (!fs.existsSync(currentPath)) {
    console.log(`File does not exist: ${oldPath}`);
    return;
  }

  // Rename the file
  fs.rename(currentPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file: ${err.message}`);
      return;
    }
    console.log(`Renamed ${oldPath} to ${newName}`);
  });
}

module.exports = {
  renameFile,
};
