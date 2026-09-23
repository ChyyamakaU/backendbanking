/* eslint-disable no-undef */
// const express = require("express")
// const app =express()
require("dotenv").config();

const app = require("./app");

app.listen(3000, () => {
    console.log("Your server is up and running");
});