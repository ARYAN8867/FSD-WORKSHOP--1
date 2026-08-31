import fs from "fs/promises";

async function readFileContent(filename) {
    const data = await fs.readFile(filename, "utf8");
    console.log(data);
  } 
  async function createFile(filename, content) {
    await fs.writeFile(filename, content);
  }
  writeFileContent("notes.txt", "This is my first note")

  