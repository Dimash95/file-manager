import os from "os";

export function printHomeDirectory() {
  const homeDirectory = os.homedir();
  console.log(`Home Directory: ${homeDirectory}`);
}
