const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();


connectDb();
const app = express();

const port = process.env.PORT || 5000;
//middeleware
app.use(express.json());
app.use("/api", require("./routes/personRoutes"));
app.use(errorHandler);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});