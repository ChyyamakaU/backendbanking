/* eslint-disable no-undef */
const validateDeposit = (req, res, next) => {

    const { amount } = req.body;

    if (amount === undefined || amount === null || amount === "") {
        return res.status(400).json({
            status: "error",
            message: "Deposit amount is required"
        });
    }

    if (typeof amount !== "number") {
        return res.status(400).json({
            status: "error",
            message: "Deposit amount must be a number"
        });
    }

    if (amount <= 0) {
        return res.status(400).json({
            status: "error",
            message: "Deposit amount must be greater than 0"
        });
    }

    next();
};


const validateTransfer = (req, res, next) => {

    const { accountNumber, amount } = req.body;

    if (!accountNumber || amount === undefined || amount === null || amount === "") {
        return res.status(400).json({
            status: "error",
            message: "Recipient account number and transfer amount are required"
        });
    }

    if (typeof amount !== "number") {
        return res.status(400).json({
            status: "error",
            message: "Transfer amount must be a number"
        });
    }

    if (amount <= 0) {
        return res.status(400).json({
            status: "error",
            message: "Transfer amount must be greater than 0"
        });
    }

    next();
};

module.exports = {
    validateDeposit,
    validateTransfer
};