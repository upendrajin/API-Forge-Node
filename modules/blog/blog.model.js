const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    imgURL: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let BLOG = mongoose.model('blog', blogSchema)

module.exports = BLOG