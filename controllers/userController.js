const asyncHandler = require("express-async-handler");

// @desc Register a user
// @route POST /api/users/register
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user!" });
});

// @desc Login user
// @route POST /api/users/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user!" });
});

// @desc Current user info
// @route GET /api/users/current
// @access PRIVATE
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information!" });
});

module.exports = { registerUser, loginUser, currentUser };
