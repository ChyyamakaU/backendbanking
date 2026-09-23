/* eslint-disable no-undef */

const validateAccount = (req, res, next) => {
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
  validateAccount
};