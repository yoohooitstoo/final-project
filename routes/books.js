const { Book } = require("../models/book");
const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    Book.find()
    .then(books => {
        res.json(books)
    })
})

router.get("/:id", (req,res) => {
    Book.findById(req.params.id)
    .then(book => {
        res.json(book)
    })
})

router.post("/", async(req, res) => {
    let book = new Book ({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
        owner: req.body.owner,
        currentRenter: req.body.currentRenter,
        requesters: req.body.requesters,
    });
    await book.save();
    res.json(book);
})

router.put("/:id", async (req, res) => {
    try {
      console.log("Made it here");
      let book = await Book.findByIdAndUpdate(
        req.params.id,
        {$push: {requesters: req.body.userId}}, 
        { new: true }
      );
      console.log(book);
      res.json(book)
    } catch (ex) {
      res.json(ex);
    }
  });

  router.put("/owns/:id", async (req, res) => {
    try {
      console.log("Made it here");
      let book = await Book.findByIdAndUpdate(
        req.params.id,
        {owner: req.body.owner}
      );
      console.log(book);
      res.json(book)
    } catch (ex) {
      res.json(ex);
    }
  });

  router.put("/renting/:id", async (req, res) => {
    try {
      console.log("Made it here");
      let book = await Book.findByIdAndUpdate(
        req.params.id,
        {currentRenter: req.body.currentRenter}
      );
      console.log(book);
      res.json(book)
    } catch (ex) {
      res.json(ex);
    }
  });




router.delete("/:id", (req, res) => {
    Book.findByIdAndRemove(req.params.id)
    .then(book => {
        res.json(book)
    })
})

module.exports = router;