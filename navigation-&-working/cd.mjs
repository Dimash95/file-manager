import fs from "fs/promises";
import path from "path";

export async function cd(targetDir) {
  const newDir = path.resolve(process.cwd(), targetDir);

  try {
    const stats = await fs.stat(newDir);
    if (!stats.isDirectory()) {
      console.log(`Invalid directory: ${newDir}`);
      return;
    }

    process.chdir(newDir);
    console.log(`Current directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`Failed to change directory: ${err.message}`);
  }
}
