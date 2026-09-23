/* eslint-disable no-undef */

const validateRegister = (req, res, next) => {

    const { fullName, email, phone, password, role } = req.body;

    if (!fullName || !email || !phone || !password || !role) {
        return res.status(400).json({
            status: "error",
            message: "Full name, email, phone, password and role are required"
        });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return res.status(400).json({
            status: "error",
            message: "Please provide a valid email"
        });
    }

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;

    if (!passwordPattern.test(password)) {
        return res.status(400).json({
            status: "error",
            message:
                "Password must be at least 6 characters and contain uppercase, lowercase, number and special character"
        });
    }

    if (role !== "admin" && role !== "user") {
        return res.status(400).json({
            status: "error",
            message: "Role must be either admin or user"
        });
    }

    next();
};


const validateLogin = (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: "error",
            message: "Email and password are required"
        });
    }

    next();
};


module.exports = {
    validateRegister,
    validateLogin
};