// third-party modules and packagees
const express = require("express");
const dotenv = require("dotenv");

// local modules and packages
const contactRoutes = require("./routes/contactRoutes.js");

// initialize express into app
const app = express();

// app serving PORT number
const port = process.env.PORT || 5000;

// MIDDLEWARES
// middlewares for routing
app.use("/api/contacts", contactRoutes);

// app starting
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
