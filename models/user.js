const mongoose = require("mongoose");
const { bookSchema } = require("./book");
const jwt = require("jsonwebtoken");


const userSchema =  new mongoose.Schema({
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
    ownedBooks: {
        type: [bookSchema],
    }
})


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, username: this.username },
        "jwt=myPRIVATEKEY"
        // process.env.JWT_PRIVATEKEY - add when deployed
    )
    return token;
}

const User = mongoose.model("User", userSchema)

module.exports.User = User;