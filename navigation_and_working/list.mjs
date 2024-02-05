import fs from "fs/promises";

export async function listFile() {
  try {
    const currentDir = process.cwd();

    // Read directory contents as an async operation
    const items = await fs.readdir(currentDir, { withFileTypes: true });

    // Sort directories first, then files, both alphabetically
    const sortedItems = items.sort((a, b) => {
      if (a.isDirectory() === b.isDirectory()) {
        return a.name.localeCompare(b.name);
      }
      return a.isDirectory() ? -1 : 1;
    });

    // Format output as a table with index, name, and type columns
    console.log("Index\tName\t\tType");
    sortedItems.forEach((item, index) => {
      console.log(`${index}\t${item.name}\t${item.isDirectory() ? "directory" : "file"}`);
    });
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
  }
}
