import fs from "fs/promises";
import path from "path";
import { createReadStream } from "fs";

export async function cat(filePath) {
  const fullPath = path.resolve(process.cwd(), filePath);

  try {
    await fs.access(fullPath); // Асинхронная проверка существования файла

    const readStream = createReadStream(fullPath, "utf8");

    readStream.on("data", (chunk) => {
      process.stdout.write(chunk);
    });

    readStream.on("error", (err) => {
      console.error(`Error reading file: ${err.message}`);
    });
  } catch (err) {
    console.log(`File does not exist: ${filePath}`);
  }
}
