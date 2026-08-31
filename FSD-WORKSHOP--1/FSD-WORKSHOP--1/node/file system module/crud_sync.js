const fs = require("fs");

//implementing CRUD operations using Node.js "fs" module

//1. Create a file
fs.writeFileSync("notes.txt", "This is my first note");

//2 read the content of the file
const data = fs.readFileSync("notes.txt", "utf8");
console.log("Read Data:", data);

//3. Update the content of the file
fs.appendFileSync("notes.txt", "Hello ECE-B");
//4. Delete the file
fs.rmSync("notes.txt");

