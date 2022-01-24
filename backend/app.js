const express = require("express");
const app = express();

app.use(express.json());

// routes import
const creatOrder = require("./routes/demoRoute");
app.use("/api/v1", creatOrder);

// routes import
const displayOrder = require("./routes/OrderDisplayRoute");
app.use("/api/v1", displayOrder);


module.exports = app;