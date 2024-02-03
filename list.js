const fs = require("fs");
const path = require("path");

function listFile() {
  const currentDir = process.cwd();

  // Read directory contents
  fs.readdir(currentDir, { withFileTypes: true }, (err, items) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    // Sort directories first, then files, both alphabetically
    const sortedItems = items.sort((a, b) => {
      // Sort by type first (directories before files), then by name
      if (a.isDirectory() === b.isDirectory()) {
        return a.name.localeCompare(b.name);
      }
      return a.isDirectory() ? -1 : 1;
    });

    // Format output as table with index, name, and type columns
    console.log("Index\tName\t\tType");
    sortedItems.forEach((item, index) => {
      console.log(`${index}\t${item.name}\t${item.isDirectory() ? "directory" : "file"}`);
    });
  });
}

module.exports = {
  listFile,
};
