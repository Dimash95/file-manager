import crypto from "crypto";
import fs from "fs/promises";

export async function hashFile(filePath, algorithm = "sha256") {
  const hash = crypto.createHash(algorithm);
  try {
    const fileBuffer = await fs.readFile(filePath);
    hash.update(fileBuffer);
    const fileHash = hash.digest("hex");
    return fileHash;
  } catch (error) {
    throw new Error(`Error reading or hashing file: ${error.message}`);
  }
}
