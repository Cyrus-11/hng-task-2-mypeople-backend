const express = require("express"); // Import the Express framework
const router = express.Router(); // Create an Express router for handling routes
const { 
    getUsers, 
    createPerson,
    getPerson, 
    updatePerson, 
    deletePerson, 
} = require("../controllers/personController"); // Import controller functions for handling requests

// Define routes for CRUD operations on persons
router.route("/").get(getUsers).post(createPerson); // GET (list) and POST (create) operations
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson); // GET (read), PUT (update), and DELETE (delete) operations

module.exports = router; // Export the router for use in the application
