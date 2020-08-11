const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    authors: {
        type: [String],
        required: true, 
        minlength: 1
    },
    description: {
        type: String,
        required: true,
        minlength: 1
    },
    image: {
        type: String,
        required: true,
        minlength: 1
    },
    link: {
        type: String,
        required: true,
        minlength: 1
    }
}); 

const Book = mongoose.model("Book", bookSchema);

module.exports.Book = Book;
module.exports.bookSchema = bookSchema;