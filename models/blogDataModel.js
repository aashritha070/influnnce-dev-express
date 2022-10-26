const mongoose = require('mongoose')

const blogTable = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    coverPic: {
        type: String,
        required: false,
    },
    emailId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("blogsMetaData", blogTable, "blogsMetaData");