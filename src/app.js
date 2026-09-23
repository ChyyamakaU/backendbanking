/* eslint-disable no-undef */

const express = require("express");

const authRoute = require("./routes/authRoute");
const accountRoute = require("./routes/accountRoute");
const transactRoute = require("./routes/transactRoute")
const app = express();

app.use(express.json());

app.use("/user", authRoute);
app.use("/account", accountRoute);
app.use("/transact", transactRoute)


module.exports = app;