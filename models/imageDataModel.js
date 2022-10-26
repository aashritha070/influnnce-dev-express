var mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
});


module.exports = new mongoose.model('imageMetaData', imageSchema, "imageMetaData");