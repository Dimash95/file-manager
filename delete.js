const fs = require("fs");
const path = require("path");

// Delete a file
function deleteFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);

  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err}`);
      return;
    }
    console.log(`${filePath} was deleted`);
  });
}

module.exports = {
  deleteFile,
};
