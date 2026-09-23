/* eslint-disable no-undef */
const express = require("express");

const {
    registerNew,
    loginUser
} = require("../controllers/authController");

const {
    validateRegister, validateLogin
} = require ("../validators/authValidator")
const router = express.Router();

router.post("/register", validateRegister, registerNew);

router.post("/login", validateLogin, loginUser);

module.exports = router;