const express = require("express");
const router = express.Router();
const { User } = require("../../models/user");
const { response } = require("express");
const { Book } = require("../../models/book");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  User.find().then((users) => {
    console.log("made it here", users)
    res.json(users);
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id).populate("ownedBooks").then((user) => {
    res.json(user)
  });
});

router.post("/", async (req, res) => {
  try {
      let user = await User.findOne({email: req.body.email});
      if(user) return res.status(400).send("This Email is Already Registered")
      user = new User({
      // name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      zipCode: req.body.zipCode,
      password: req.body.password,
      ownedBooks: req.body.ownedBooks,
      renting: req.body.renting
    });
    // sale and hash password using bcrypt
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    await user.save();
    res.json(user);
  } catch (ex) {
    res.json(ex);
  }
});

router.put("/own/:id", async (req, res) => {
  try {
    console.log("Made it here");
    let user = await User.findByIdAndUpdate(
      req.params.id,
      {$push: {ownedBooks: req.body.bookId}}, 
      { new: true }
    );
    console.log(user);
    res.json(user)
  } catch (ex) {
    res.json(ex);
  }
});

router.put("/rent/:id", async (req, res) => {
  try {
    console.log("Made it here");
    let user = await User.findByIdAndUpdate(
      req.params.id,
      {$push: {renting: req.body.bookId}}, 
      { new: true }
    );
    console.log(user);
    res.json(user)
  } catch (ex) {
    res.json(ex);
  }
});

router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id).then((user) => {
    res.json(user);
  });
});

module.exports = router;
