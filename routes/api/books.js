const { Book } = require("../../models");
const booksController = require("../../controllers/booksController");
const router = require("express").Router();
// const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../../models")

router.route("/").get(booksController.findAll);

router.get("/:id", (req, res) => {
  Book.findById(req.params.id).then((book) => {
    res.json(book);
  });
});

router.post("/", async (req, res) => {
  let book = new Book({
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
});


router.post("/", (req, res) => {
  console.log(req.headers.auth);
  jwt.verify(req.headers.auth, process.env.JWT_PASSWORD, function (
    err,
    decoded
  ) {
    if(err) {
      console.log("Error decoding token.");
      console.log(err);
      res.status(401).json({
        error: true,
        data: null,
        message: "Please sign in again.",
      });
    }else {
      console.log(decoded);
      db.book.create(req.body)
      .then((createdBook) => {
        res.json({
          error: false,
          data: createdBook,
          message: "Successfully added a new Book!",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Failed to add a new Book to your library.",
        });
      });
    }
  });
});


router.put("/:id", async (req, res) => {
  try {
    console.log("Made it here");
    let book = await Book.findByIdAndUpdate(
      req.params.id,
      { $push: { requesters: req.body.userId } },
      { new: true }
    );
    console.log(book);
    res.json(book);
  } catch (ex) {
    res.json(ex);
  }
});

router.put("/owns/:id", async (req, res) => {
  try {
    console.log("Made it here");
    let book = await Book.findByIdAndUpdate(req.params.id, {
      owner: req.body.owner,
    });
    console.log(book);
    res.json(book);
  } catch (ex) {
    res.json(ex);
  }
});

router.put("/renting/:id", async (req, res) => {
  try {
    console.log("Made it here");
    let book = await Book.findByIdAndUpdate(req.params.id, {
      currentRenter: req.body.currentRenter,
    });
    console.log(book);
    res.json(book);
  } catch (ex) {
    res.json(ex);
  }
});

router.delete("/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id).then((book) => {
    res.json(book);
  });
});

module.exports = router;
