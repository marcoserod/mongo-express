const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

const app = express();
require("dotenv").config();

//middleware
app.use(express.json());
app.use("/api", userRoutes);

//mongoose connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
