const mongoose = require("mongoose");

const crudSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    auth : {
        type : String,
        required : true
    },

    year : {
        type : Number,
        required : true
    },

    pages : {
        type : Number,
        required : true
    },

    prices : {
        type : Number,
        required : true
    },

    copies : {
        type : Number,
        required : true
    }
});

const crudPr = mongoose.model('bookCr', crudSchema)

module.exports = crudPr