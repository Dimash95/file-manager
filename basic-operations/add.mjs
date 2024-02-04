import fs from "fs/promises";
import path from "path";

export async function addFile(fileName) {
  const filePath = path.join(process.cwd(), fileName);

  try {
    // Попытка доступа к файлу для проверки его существования
    await fs.access(filePath);
    console.log(`File already exists: ${fileName}`);
  } catch {
    // Если файл не существует, создаем его
    try {
      await fs.writeFile(filePath, "");
      console.log(`Created empty file: ${fileName}`);
    } catch (err) {
      console.error(`Error creating file: ${err.message}`);
    }
  }
}
