import express from "express";

console.log("server.js");

export const server = express();
export default server;

server.get("/", (req, res) => res.send("Hello, World!"));
