const express = require("express");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.b27bs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("server connected");
    });
    
  })
  .catch((err) => {
    console.log(err.message);
  });




