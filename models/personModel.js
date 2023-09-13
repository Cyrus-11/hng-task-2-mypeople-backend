// Import the Mongoose library
const mongoose = require("mongoose");

// Define a Mongoose schema for the "Person" collection
const personSchema = mongoose.Schema({
    // Define a field "name" with a String data type
    name: {
        type: String, // The data type is String
        required: [true, "Please add the person name"], // It is required and has a custom error message if not provided
        unique: true // It must be unique among all documents in the collection
    },
    // You can add other fields here if needed
}, {
    timestamps: true // Automatically add "createdAt" and "updatedAt" timestamps to documents
});

// Export the Mongoose model for the "Person" collection
module.exports = mongoose.model("Person", personSchema);
