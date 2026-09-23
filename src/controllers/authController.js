/* eslint-disable no-undef */
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const bankUsers = [];

const registerNew = async (req, res) => {

    const { fullName, email, phone, password, role } = req.body

    const existingUser = bankUsers.find(users => users.email === email)
    if (existingUser) {
        return res.json({
            status: "error",
            message: "This email already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(
        password,
        Number(process.env.SALT_ROUNDS)
    );

    const newUser = {

        id: bankUsers.length + 1,
        fullName,
        email,
        phone,
        password: hashedPassword,
        accountNumber: string(1000000000+bankUsers.length+1),
        role
    }

    bankUsers.push(newUser)
    console.log(bankUsers)

    return res.status(201).json({
        status: "sucessful",
        message: "You have registered successfully"
    })

}

const loginUser = async (req, res) => {

    const { email, password } = req.body

    const existingUser = bankUsers.find(users => users.email === email)
    if (!existingUser) {
        return res.status(404).json({
            status: "error",
            message: "This email already exists"
        })
    }


    const passwordMatch = await bcrypt.compare(
    password,
    existingUser.password
  );

   if(!passwordMatch){
    return res.status(409).json({
        status: "error",
        message: "incorrect password"
    })   }

    const token = jwt.sign(
        {
            id: existingUser.id,
            email: existingUser.email,
            role: existingUser.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    return res.status(201).json({
        status: "sucessful",
        message: "You have been successfully logged in",
        token
    });

}


module.exports = {
    registerNew,
    loginUser
};