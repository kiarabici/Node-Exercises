"strict mode"; // ex 8 logging to the console the file
const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 5000;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readFile("nacktschnecke.html");
