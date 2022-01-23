const express = require("express");
const app = express();

app.use(express.json());

// routes import
const demo = require("./routes/demoRoute");
app.use("/api/v1", demo);

module.exports = app;