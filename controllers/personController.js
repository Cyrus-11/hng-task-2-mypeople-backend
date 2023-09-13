const asyncHandler = require("express-async-handler");
const Person = require("../models/personModel");
//@desc Get all Users
//@route GET /api
//@access public
// Handle CRUD operations based on the 'name' query paramete
// Perform operations based on the provided 'name'
// Example: Fetch all persons with the provided 'name'
// Implement logic to handle CRUD operations based on the provided name and given id by the database
const getUsers = asyncHandler( async (req,res) => {
    const person = await Person.find();
    res.status(200).json({message:"All Users",person});
});
//@desc CREATE New User
//@route POST /api
//@access public
// Implement the CREATE operation
const createPerson = asyncHandler ( async (req,res) => {
    console.log("The request body is : ", req.body);
    const {name} = req.body;
    if(!name){
        res.status(400);
       throw new Error("All fields are required !");
    }
    const existingUser = await Person.find({
        $or: [{ name }],
    }).catch((e) => {
        return res.status(500).send("Server error")
    })
    if (existingUser.length === 0) {
        const person = await Person.create({
            name,
        })
        res.status(201).json({message:"Person Created",person});
    }
   
    res.status(404).json({message:"User already Exist"});
});
//@desc READ User
//@route GET /api/:id
//@access public
// Implement the READ operation
const getPerson = asyncHandler (async (req,res) => {
    const person = await Person.findById(req.params.id)
    if(!person) {
        res.status(404);
        throw new Error({"error":"Person not found"});
    }
    res.status(200).json({message:"Person Found",person});
});
//@desc UPDATE User
//@route PUT /api/:id
//@access public
// Implement the UPDATE operation
const updatePerson = asyncHandler ( async (req,res) => {
    const person = await Person.findById(req.params.id)
    if(!person) {
        res.status(404);
        throw new Error({"error":"Person not found"});
    }
    const updatedPerson = await Person.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json({message:"Person Updated", person});
});
//@desc DELETE User
//@route DELETE/api/:id
//@access public
// Implement the DELETE operation
const deletePerson = asyncHandler ( async (req,res) => {
    const person = await Person.findById(req.params.id)
    if(!person) {
        res.status(404);
        throw new Error({"error":"Person has already being deleted"});
    }
    await Person.deleteOne(person);
    res.status(200).json({message: "Person deleted", person});
});
module.exports = {
     getUsers, 
     createPerson, 
     getPerson,
     updatePerson, 
     deletePerson,
};