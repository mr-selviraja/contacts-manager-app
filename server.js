// third-party modules and packagees
const express = require("express");
const dotenv = require("dotenv");

// local modules and packages
const contactRoutes = require("./routes/contactRoutes.js");
const errorHandler = require("./middleware/errorHandler.js");

// initialize express into app
const app = express();

// app serving PORT number
const port = process.env.PORT || 5000;

// MIDDLEWARES
// for parsing data received from the client
app.use(express.json());
// for routing
app.use("/api/contacts", contactRoutes);
// for errorHandling
app.use(errorHandler);

// run app on the defined port
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
