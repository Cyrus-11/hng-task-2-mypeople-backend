const mongoose = require ("mongoose");

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the person name"],
    },
}, {
    timestamp: true
});

module.exports = mongoose.model("Person", personSchema);