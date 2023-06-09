// third-party modules and packagees
const express = require("express");
const dotenv = require("dotenv").config();

// local modules and packages
const contactRoutes = require("./routes/contactRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");

// DB connection
connectDb();
// initialize express into app
const app = express();

// app serving PORT number
const port = process.env.PORT || 5000;

// MIDDLEWARES
// for parsing data received from the client
app.use(express.json());
// for routing through contacts APIs
app.use("/api/contacts", contactRoutes);
// for routing through user APIs
app.use("/api/users", userRoutes);
// for errorHandling
app.use(errorHandler);

// run app on the defined port
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
