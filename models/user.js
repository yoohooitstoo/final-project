const mongoose = require("mongoose");

const User = mongoose.model("users", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    username: {
        type: String,
        required: true, 
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        minlength: 1
    },
    zipCode: {
        type: Number,
        required: true,
        minlength: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 1
    },
}))

module.exports.User = User;