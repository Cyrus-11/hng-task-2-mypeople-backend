// Import the Mongoose library
const mongoose = require("mongoose");

// Define a function for connecting to the database
const connectDb = async () => {
    try {
        // Attempt to connect to the database using the CONNECTION_STRING from environment variables
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        
        // If the connection is successful, log the host and database name
        console.log(
            "Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        // If there is an error during connection, log the error and exit the process
        console.log(err);
        process.exit(1);
    }
};

// Export the connectDb function to be used elsewhere in the application
module.exports = connectDb;
