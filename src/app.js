/* eslint-disable no-undef */

const express = require("express");

const authRoute = require("./routes/authRoute");
const accountRoute = require("./routes/accountRoute");

const app = express();

app.use(express.json());

app.use("/user", authRoute);
app.use("/account", accountRoute);


module.exports = app;