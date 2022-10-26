const mongoose = require('mongoose')

const tagsTable = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("tagDetails", tagsTable, "tagDetails");