const readline = require("readline");
const { getUsername } = require("./userName");
const { listFile } = require("./list");
const { copyFile } = require("./copy");
const { deleteFile } = require("./delete");
const { up } = require("./up");
const { cd } = require("./cd");
const { cat } = require("./cat");
const { addFile } = require("./add");
const { renameFile } = require("./rename");
const { moveFile } = require("./move");

const username = getUsername();
console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${process.cwd()}> `,
});

rl.prompt();

rl.on("line", (line) => {
  const [command, ...args] = line.trim().split(" ");

  switch (command) {
    case "ls":
      listFile();
      break;
    case "cp":
      copyFile(args[0], args[1]);
      break;
    case "rm":
      deleteFile(args[0]);
      break;
    case "up":
      up();
      break;
    case "cd":
      if (args.length > 0) {
        cd(args[0]);
      } else {
        console.log("Please specify a path.");
      }
      break;
    case "cat":
      if (args.length > 0) {
        cat(args[0]);
      } else {
        console.log("Please specify a file path.");
      }
      break;
    case "add":
      if (args.length > 0) {
        addFile(args[0]);
      } else {
        console.log("Please specify a file name.");
      }
      break;
    case "rn":
      if (args.length >= 2) {
        renameFile(args[0], args[1]);
      } else {
        console.log("Please specify the current file path and the new file name.");
      }
      break;
    case "mv":
      if (args.length >= 2) {
        moveFile(args[0], args[1]);
      } else {
        console.log("Please specify the source path and the destination path.");
      }
      break;
    case ".exit":
      rl.close();
      break;
    default:
      console.log("Invalid command");
      break;
  }
  rl.prompt();
}).on("close", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});

// List files in the current directory
