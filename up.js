const path = require("path");
const os = require("os");

function up() {
  const currentDir = process.cwd();
  const parentDir = path.resolve(currentDir, "..");

  // Get the root directory based on the platform
  const rootDir = os.platform() === "win32" ? process.cwd().split(path.sep)[0] : "/";

  if (currentDir !== rootDir) {
    process.chdir(parentDir);
    console.log(`Moved up to ${parentDir}`);
  } else {
    console.log(`You are already in the root directory.`);
  }

  // Display the current working directory after the operation
  console.log(`Current directory: ${process.cwd()}`);
}

// Example usage:
// User types 'up' command
module.exports = {
  up,
  // ... другие функции, если они есть ...
};
