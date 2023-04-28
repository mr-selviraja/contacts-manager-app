const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name!"],
    },

    email: {
      type: String,
      required: [true, "Please add the email address!"],
    },

    phone: {
      type: String,
      required: [true, "Please add the phone number!"],
    },

    bloodGroup: {
      type: String,
      required: [true, "Please add the Blood group!"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
