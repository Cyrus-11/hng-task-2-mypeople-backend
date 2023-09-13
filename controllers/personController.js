const asyncHandler = require("express-async-handler");
const Person = require("../models/personModel");

/**
 * @desc Get all persons
 * @route GET /api
 * @access Public
 * @description Retrieve a list of all persons or filter by 'name' query parameter.
 */
const getUsers = asyncHandler(async (req, res) => {
  const persons = await Person.find();
  res.status(200).json({ message: "All Persons", persons });
});

/**
 * @desc Create a new person
 * @route POST /api
 * @access Public
 * @description Create a new person record with the provided 'name'.
 */
 createPerson = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }

  try {
    const existingUser = await Person.findOne({ name });

    if (existingUser) {
      res.status(409).json({ error: "User already exists" });
    } else {
      const person = await Person.create({ name });
      res.status(201).json({ message: "Person Created", person });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @desc Read a person by ID
 * @route GET /api/:id
 * @access Public
 * @description Retrieve a person by their unique identifier (ID).
 */
 const getPerson = asyncHandler(async (req, res) => {
  const person = await Person.findById(req.params.id);

  if (!person) {
    res.status(404).json({ error: "Person not found" });
  } else {
    res.status(200).json({ message: "Person Found", person });
  }
});

/**
 * @desc Update a person by ID
 * @route PUT /api/:id
 * @access Public
 * @description Update the details of a person by their ID.
 */
 const updatePerson = asyncHandler(async (req, res) => {
  const person = await Person.findById(req.params.id);

  if (!person) {
    res.status(404).json({ error: "Person not found" });
  } else {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Person Updated", person: updatedPerson });
  }
});

/**
 * @desc Delete a person by ID
 * @route DELETE /api/:id
 * @access Public
 * @description Delete a person record by their ID.
 */
 const deletePerson = asyncHandler(async (req, res) => {
  const person = await Person.findById(req.params.id);

  if (!person) {
    res.status(404).json({ error: "Person not found" });
  } else {
    await Person.deleteOne(person);
    res.status(200).json({ message: "Person deleted", person });
  }
});

module.exports = {
  getUsers,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
