/* eslint-disable no-undef */

const bankUsers = require("../data");

const deposit = async (req, res) => {

    const { amount } = req.body;

    const user = bankUsers.find(
        user => user.id === req.user.id
    );

    if (!user) {
        return res.status(404).json({
            status: "error",
            message: "User not found"
        });
    }

    user.balance += amount;

    return res.status(200).json({
        status: "successful",
        message: "Deposit successful",
        accountNumber: user.accountNumber,
        balance: user.balance
    });
};

const transfer = async (req, res) => {

    const { accountNumber, amount } = req.body;

    // Find the person sending the money
    const sender = bankUsers.find(
        user => user.id === req.user.id
    );

    if (!sender) {
        return res.status(404).json({
            status: "error",
            message: "Sender not found"
        });
    }

    const receiver = bankUsers.find(
        user => user.accountNumber === accountNumber
    );

    if (!receiver) {
        return res.status(404).json({
            status: "error",
            message: "Recipient account not found"
        });
    }


    if (sender.balance < amount) {
        return res.status(400).json({
            status: "error",
            message: "Insufficient balance"
        });
    }


    if (sender.id === receiver.id) {
        return res.status(400).json({
            status: "error",
            message: "You cannot transfer money to yourself"
        });
    }

    sender.balance -= amount;


    receiver.balance += amount;

    return res.status(200).json({
        status: "successful",
        message: "Transfer successful",
        amount,
        recipientAccountNumber: receiver.accountNumber,
        remainingBalance: sender.balance
    });
};

module.exports = {
    deposit, transfer
};