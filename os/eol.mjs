import os from "os";

export function printEOL() {
  console.log("Маркер конца строки для этой ОС:", JSON.stringify(os.EOL));
}
