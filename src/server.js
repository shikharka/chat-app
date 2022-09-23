const path = require("path");
const http = require("http");
const express = require("express");

const router = require("./routes");

const app = express();
const server = http.createServer(app);

const publicDirPath = path.join(__dirname, "../public");

app.use(router);
app.use(express.static(publicDirPath));

module.exports = server;
