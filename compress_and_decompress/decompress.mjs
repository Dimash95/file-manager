import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";

export async function decompressFile(sourcePath, destinationPath) {
  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(destinationPath);
  const brotliStream = zlib.createBrotliDecompress();

  try {
    await pipeline(sourceStream, brotliStream, destinationStream);
    console.log(`File decompressed successfully to ${destinationPath}`);
  } catch (error) {
    console.error(`Error during decompression: ${error.message}`);
    throw error;
  }
}
