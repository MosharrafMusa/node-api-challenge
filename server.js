const express = require("express");

const server = express();

const projectRouter = require("./projectRouter");
const actionRouter = require("./actionRouter");
const cors = require("cors");

server.use(express.json());
server.use(cors());
server.use("/project", projectRouter);
server.use("/action", actionRouter);

module.exports = server;
