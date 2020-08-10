const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { response } = require("express");


router.get("/", (req,res) => {
    User.find()
    .then(users => {
        res.json(users)
    })
})

router.get("/:id", (req,res) => {
    User.findById(req.params.id)
    .then(user => {
        res.json(user)
    })
})

router.post("/", async(req, res) => {
    try{
        let user = new User ({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            zipCode: req.body.zipCode,
            password: req.body.password,
        });
        await user.save();
        res.json(user);
    }catch(ex){
        res.json(ex)
    }

})

router.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(user => {
        res.json(user)
    })
})

module.exports = router;