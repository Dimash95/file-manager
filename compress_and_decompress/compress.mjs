import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";

export async function compressFile(sourcePath, destinationPath) {
  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(destinationPath);
  const brotliStream = zlib.createBrotliCompress();

  try {
    await pipeline(sourceStream, brotliStream, destinationStream);
    console.log(`File compressed successfully to ${destinationPath}`);
  } catch (error) {
    console.error(`Error during compression: ${error.message}`);
    throw error;
  }
}
