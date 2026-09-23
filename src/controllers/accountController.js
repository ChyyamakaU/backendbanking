/* eslint-disable no-undef */

const bankUsers = require("../data");

const viewBalance = async (req, res) => {

    const user = bankUsers.find(user => user.id === req.user.id);

    if (!user) {
        return res.status(404).json({
            status: "error",
            message: "User not found"
        });
    }

    return res.status(200).json({
        status: "successful",
        message: "Account balance retrieved successfully",
        accountNumber: user.accountNumber,
        balance: user.balance
    });
};

module.exports = {
    viewBalance
};