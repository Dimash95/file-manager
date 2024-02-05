import readline from "readline";

import { getUsername } from "./userName.mjs";

import { up } from "./navigation_and_working/up.mjs";
import { cd } from "./navigation_and_working/cd.mjs";
import { listFile } from "./navigation_and_working/list.mjs";

import { addFile } from "./basic-operations/add.mjs";
import { renameFile } from "./basic-operations/rename.mjs";
import { copyFile } from "./basic-operations/copy.mjs";
import { moveFile } from "./basic-operations/move.mjs";
import { cat } from "./basic-operations/cat.mjs";
import { deleteFile } from "./basic-operations/delete.mjs";

import { printEOL } from "./os/eol.mjs";
import { printCPUInfo } from "./os/cpus.mjs";
import { printHomeDirectory } from "./os/homedir.mjs";
import { printSystemUsername } from "./os/username.mjs";
import { printCPUArchitecture } from "./os/architecture.mjs";

import { hashFile } from "./hash/hash.mjs";

import { compressFile } from "./compress_and_decompress/compress.mjs";
import { decompressFile } from "./compress_and_decompress/decompress.mjs";

const username = getUsername();
console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${process.cwd()}> `,
});

rl.prompt();

rl.on("line", async (line) => {
  const [input] = line.trim().split(" ");
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
    case "os":
      handleOsCommand(args); // Pass the arguments to a separate function for handling os commands
      break;
    case "hash":
      if (args.length > 0) {
        try {
          const fileHash = await hashFile(args[0]);
          console.log(`Hash of ${args[0]}: ${fileHash}`);
        } catch (error) {
          console.error(`Error hashing file: ${error.message}`);
        }
      } else {
        console.log("Please specify a file path for hashing.");
      }
      break;
    case "compress":
      if (args.length >= 2) {
        try {
          await compressFile(args[0], args[1]);
          console.log("Compression completed.");
        } catch (error) {
          console.error(`Error during compression: ${error.message}`);
        }
      } else {
        console.log("Please specify a source path and a destination path.");
      }
      break;
    case "decompress":
      if (args.length >= 2) {
        try {
          await decompressFile(args[0], args[1]);
          console.log("Decompression completed.");
        } catch (error) {
          console.error(`Error during decompression: ${error.message}`);
        }
      } else {
        console.log("Please specify a source path and a destination path.");
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

function handleOsCommand(args) {
  const [osCommand, ...osArgs] = args; // Split the os command and its arguments

  switch (osCommand) {
    case "--EOL":
      printEOL();
      break;
    case "--cpus":
      printCPUInfo();
      break;
    case "--homedir":
      printHomeDirectory();
      break;
    case "--username":
      printSystemUsername();
      break;
    case "--architecture":
      printCPUArchitecture();
      break;
    default:
      console.log("Invalid os command");
      break;
  }
}
