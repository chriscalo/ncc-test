import { start } from "express-start";
import server from "./server";

console.log("index.js");

const main = !module.parent;

if (main) {
  console.log("main!");
  start(server);
}
