const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// @access PUBLIC
const getContacts = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Here are all contacts!" });
});

// @desc Create New contact
// @route POST /api/contacts
// @access PUBLIC
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  res.status(201).json({ message: "Create contact!" });
});

module.exports = { getContacts, createContact };

// @desc Get contact
// @route GET /api/contact/contacts/:id
// @access PUBLIC
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for: ${req.params.id}` });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access PUBLIC
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for: ${req.params.id}` });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access PUBLIC
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for: ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
