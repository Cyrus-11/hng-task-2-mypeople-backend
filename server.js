// Import required modules and libraries
const express = require("express"); // Express.js for creating the server
const errorHandler = require("./middleware/errorHandler"); // Custom error handling middleware
const connectDb = require("./config/dbConnection"); // Function to connect to the database
const dotenv = require("dotenv").config(); // Load environment variables from a .env file

// Connect to the database
connectDb();

// Create an Express application
const app = express();

// Define the port where the server will listen (use the provided PORT or default to 5000)
const port = process.env.PORT || 5000;

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use("/api", require("./routes/personRoutes")); // Route handling for API endpoints
app.use(errorHandler); // Custom error handling middleware for the application

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
