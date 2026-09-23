/* eslint-disable no-undef */

const express = require("express");

const { viewBalance } = require("../controllers/accountController");

const authentication = require("../middleware/authentication");

const router = express.Router();

router.get("/balance", authentication, viewBalance);


module.exports = router;