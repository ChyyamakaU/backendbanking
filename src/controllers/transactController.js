/* eslint-disable no-undef */

const bankUsers = require("../data");

const deposit = async (req, res) => {

    const { amount } = req.body;

    const user = bankUsers.find(
        user => user.accountNumber === req.user.accountNumber
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

module.exports = deposit;