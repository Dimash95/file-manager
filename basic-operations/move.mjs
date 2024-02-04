import fs from "fs/promises";
import path from "path";
import { createReadStream, createWriteStream } from "fs";

export async function moveFile(sourcePath, destinationPath) {
  const src = path.join(process.cwd(), sourcePath);
  const dest = path.join(process.cwd(), destinationPath);

  try {
    await fs.access(src); // Проверка существования файла

    // Создание потоков для чтения и записи
    const readStream = createReadStream(src);
    const writeStream = createWriteStream(dest);

    // Использование потоков для копирования файла
    readStream.pipe(writeStream);

    return new Promise((resolve, reject) => {
      readStream.on("error", reject);
      writeStream.on("error", reject);
      writeStream.on("close", async () => {
        try {
          await fs.unlink(src);
          resolve(`Moved ${sourcePath} to ${destinationPath}`);
        } catch (err) {
          reject(`Error deleting file: ${err.message}`);
        }
      });
    });
  } catch (err) {
    console.error(`Error moving file: ${err.message}`);
  }
}
