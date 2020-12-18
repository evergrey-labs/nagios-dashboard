const path = require("path");
const express = require("express");
const app = express(); // create express app

const {
  REACT_APP_SERVICE,
  REACT_APP_HOST,
  REACT_APP_OK,
  REACT_APP_CRITICAL,
  REACT_APP_WARNING,
  REACT_APP_URL,
  REACT_APP_APIKEY
} = process.env;

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});