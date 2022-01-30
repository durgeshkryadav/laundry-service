const express = require("express");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser=require("body-parser");
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.b27bs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
app.use(cors());
app.use(bodyParser());

app.use("/", userRoutes);
app.listen(5000,console.log("server connected"));
  




