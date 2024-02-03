const fs = require("fs");
const path = require("path");

// Function to change directory
function cd(targetDir) {
  const newDir = path.resolve(process.cwd(), targetDir);

  // Check if the directory exists
  if (!fs.existsSync(newDir) || !fs.statSync(newDir).isDirectory()) {
    console.log(`Invalid directory: ${newDir}`);
    return;
  }

  // Change the current working directory
  try {
    process.chdir(newDir);
    console.log(`Current directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`Failed to change directory: ${err.message}`);
  }
}

module.exports = {
  cd,
};
