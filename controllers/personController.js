const asyncHandler = require("express-async-handler");
const Person = require("../models/personModel");
//@desc Get all Users
//@route GET /api
//@access public

const getUsers = asyncHandler( async (req,res) => {
    const person = await Person.find();
    res.status(200).json(person);
});

//@desc CREATE New User
//@route POST /api
//@access public

const createPerson = asyncHandler ( async (req,res) => {
    console.log("The request body is : ", req.body);
    const {name} = req.body;
    if(!name){
        res.status(400);
       throw new Error("All fields are required !");
    }
    const person = await Person.create({
        name,
    })
    res.status(201).json(person);
});

//@desc READ User
//@route GET /api/user/:id
//@access public

const getPerson = asyncHandler (async (req,res) => {
    const person = await Person.findById(req.params.id)
    if(!person) {
        res.status(404);
        throw new Error("Person not found");
    }
    res.status(200).json(person);
});

//@desc UPDATE User
//@route PUT /api/user/:id
//@access public

const updatePerson = asyncHandler ( async (req,res) => {
    const person = await Person.findById(req.params.id)
    if(!person) {
        res.status(404);
        throw new Error("Person not found");
    }

    const updatedPerson = await Person.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedPerson);
});

//@desc DELETE User
//@route DELETE/api/user/:id
//@access public

const deletePerson = asyncHandler ( async (req,res) => {
    const person = await Person.findById(req.params.id)
    if(!person) {
        res.status(404);
        throw new Error("Person not found");
    }
    await Person.deleteOne();
    res.status(200).json(person);
});

module.exports = {
     getUsers, 
     createPerson, 
     getPerson,
     updatePerson, 
     deletePerson,
};