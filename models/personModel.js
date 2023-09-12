const mongoose = require ("mongoose");

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the person name"],
        unique: true
    },
    // Adding other fields if needed
}, {
    timestamp: true
});

module.exports = mongoose.model("Person", personSchema);