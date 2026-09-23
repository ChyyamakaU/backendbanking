/* eslint-disable no-undef */

const express = require("express");

const { viewBalance } = require("../controllers/accountController");

const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.get("/balance", authenticate, viewBalance);

module.exports = router;