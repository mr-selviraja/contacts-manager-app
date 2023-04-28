// @desc Get all contacts
// @route GET /api/contacts
// @access PUBLIC
const getContacts = (req, res) => {
  res.status(200).json({ message: "Here are all contacts!" });
};

// @desc Create New contact
// @route POST /api/contacts
// @access PUBLIC
const createContact = (req, res) => {
  res.status(201).json({ message: "Create contact!" });
};

module.exports = { getContacts, createContact };

// @desc Get contact
// @route GET /api/contact/contacts/:id
// @access PUBLIC
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for: ${req.params.id}` });
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access PUBLIC
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for: ${req.params.id}` });
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access PUBLIC
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for: ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
