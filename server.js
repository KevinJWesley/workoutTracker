const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

//require models
// const  = require("");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/custommethods",
  { useNewUrlParser: true }
);
