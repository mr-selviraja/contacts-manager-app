const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// @desc Register a user
// @route POST /api/users/register
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already Registered!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created: ${user}`);

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid!");
  }

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
