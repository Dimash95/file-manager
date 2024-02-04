import fs from "fs/promises";
import path from "path";

export async function renameFile(oldPath, newName) {
  try {
    const currentPath = path.join(process.cwd(), oldPath);
    const newPath = path.join(process.cwd(), newName);

    // Check if the original file exists
    const fileExists = await fs
      .access(currentPath)
      .then(() => true)
      .catch(() => false);
    if (!fileExists) {
      console.log(`File does not exist: ${oldPath}`);
      return;
    }

    // Rename the file
    await fs.rename(currentPath, newPath);
    console.log(`Renamed ${oldPath} to ${newName}`);
  } catch (err) {
    console.error(`Error renaming file: ${err.message}`);
  }
}
