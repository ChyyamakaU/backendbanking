/* eslint-disable no-undef */
const express = require("express");
const authRoute = require("./routes/authRoute");

const app = express();

app.use(express.json());

app.use("/user", authRoute);

module.exports = app;