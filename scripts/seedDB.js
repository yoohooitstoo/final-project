const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MOGODB_URI || "mongodb://localhost/bookunityDB");

const bookSeeds = [

]

const userSeeds = [
    
]