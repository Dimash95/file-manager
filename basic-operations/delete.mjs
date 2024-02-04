import fs from "fs/promises";
import path from "path";

export async function deleteFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);

  try {
    await fs.unlink(fullPath);
    console.log(`${filePath} was deleted`);
  } catch (err) {
    console.error(`Error deleting file: ${err.message}`);
  }
}
