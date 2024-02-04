import fs from "fs/promises";
import path from "path";

export async function copyFile(source, destination) {
  try {
    const srcPath = path.join(process.cwd(), source);
    const destPath = path.join(process.cwd(), destination);

    await fs.copyFile(srcPath, destPath);
    console.log(`${source} was copied to ${destination}`);
  } catch (err) {
    console.error(`Error copying file: ${err.message}`);
  }
}
