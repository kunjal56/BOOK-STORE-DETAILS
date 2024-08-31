const mongoose =  require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookCrP");

const db = mongoose.connection

db.once("open", (err) => {
    err ? console.log("Error") : console.log("Database start successfully !");
})

module.exports = db