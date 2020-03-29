import { start } from "express-start";
import server from "./server";
import fs from "fs";
import path from "path";

console.log("index.js");
console.log(`Node.js version: ${process.version}`);

if (!module.parent) {
  main();
}

function main() {
  const pathToFile = path.join(__dirname, "file.txt");
  console.log(`Reading contents from file: \n${pathToFile}`);
  const contents = fs.readFileSync(pathToFile, { encoding: "utf-8" });
  console.log(contents);
  
  console.log("main module, starting server!");
  start(server);
}
