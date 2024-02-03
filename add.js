const fs = require("fs");
const path = require("path");

function addFile(fileName) {
  const filePath = path.join(process.cwd(), fileName);

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    console.log(`File already exists: ${fileName}`);
    return;
  }

  fs.writeFile(filePath, "", (err) => {
    if (err) {
      console.error(`Error creating file: ${err.message}`);
      return;
    }
    console.log(`Created empty file: ${fileName}`);
  });
}

module.exports = {
  addFile,
};
