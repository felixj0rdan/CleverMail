const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
    from:{
        type: String,
        required: true,
        trim: true
    },

    to:{
        type: String,
        required: true,
        trim: true
    },

    cc: {
        type: String,
        required: true,
        trim: true
    },

    scheduler: {
        type: String,
        // required: true,
        trim: true
    },

    subject: {
        type: String,
        trim: true,
    }

    content: {
        type: String,
        required: true,
        trim: true
    }
})


module.exports = mongoose.model("Mail", mailSchema)