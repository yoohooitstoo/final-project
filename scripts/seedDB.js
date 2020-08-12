const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MOGODB_URI || "mongodb://localhost/bookunityDB");

const bookSeed = [
    {
        title: "Book 1",
        authors: ["Author 1"],
        description: "Description 1",
        image: "",
        link: "link",
        owner: "",
        currentRenter: "",
        requesters: ""
    }
]

const userSeed = [
    {
        name: "Jared Porter",
        username: "jaredp17",
        email: "jaredp17@me.com",
        zipCode: 30062,
        password: "password",
        ownedBooks: [],
        renting: []
    }
]

db.Book
.remove({}).then(()=> db.Book.collection.insertMany(bookSeed)).then(data => {
    console.log(data.result.n + " records inserted!");
}).catch(err => {
    console.err(err);
    process.exit(1);
})