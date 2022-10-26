const mongoose = require('mongoose');

const UserTable = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: false
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("userMetaData", UserTable, "userMetaData")