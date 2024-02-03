const fs = require("fs");
const path = require("path");

function moveFile(sourcePath, destinationPath) {
  const src = path.join(process.cwd(), sourcePath);
  const dest = path.join(process.cwd(), destinationPath);

  // Check if the source file exists
  if (!fs.existsSync(src)) {
    console.log(`File does not exist: ${sourcePath}`);
    return;
  }

  // Create a readable stream
  const readStream = fs.createReadStream(src);

  // Create a writable stream
  const writeStream = fs.createWriteStream(dest);

  // Pipe the read stream to the write stream
  readStream.pipe(writeStream);

  readStream.on("error", (err) => {
    console.error(`Error reading file: ${err.message}`);
  });

  writeStream.on("error", (err) => {
    console.error(`Error writing file: ${err.message}`);
  });

  writeStream.on("close", () => {
    // Delete the source file after successful copy
    fs.unlink(src, (err) => {
      if (err) {
        console.error(`Error deleting file: ${err.message}`);
        return;
      }
      console.log(`Moved ${sourcePath} to ${destinationPath}`);
    });
  });
}

module.exports = {
  moveFile,
};
