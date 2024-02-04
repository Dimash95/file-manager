import os from "os";

export function printCPUArchitecture() {
  const architecture = os.arch();
  console.log(`CPU Architecture: ${architecture}`);
}
