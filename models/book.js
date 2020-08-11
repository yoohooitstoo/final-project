const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    },
    owner: {
        type: String,
        required: true,
        minlength: 2
    }, 
    currentRenter: {
        type: String,
        minlength: 2
    }, 
    requesters: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ]
}); 

const Book = mongoose.model("Book", bookSchema);

module.exports.Book = Book;
module.exports.bookSchema = bookSchema;