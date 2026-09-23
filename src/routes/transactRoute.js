/* eslint-disable no-undef */
const express = require("express");

const { deposit, transfer } = require("../controllers/transactController");

const authentication = require("../middleware/authentication");

const { validateDeposit, validateTransfer } = require("../validators/transactionValidator");

const router = express.Router();

router.post(
    "/deposit",
    validateDeposit,
    authentication,
    deposit
);

router.post(
    "/deposit",
    validateTransfer,
    authentication,
    transfer
);

module.exports = router;