const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const port = 3000;
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/taskmanager")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.send("This is the get Request!");
});

app.post("/submit", (req, res) => {
  res.send("This is the post request!");
});
// Listening to the server

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
