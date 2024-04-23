const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const mobileSchema = new Schema({
    display: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    },
    battery: {
        type: String,
        required: true
    },
    camera: {
        type: String,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let MOBILE = mongoose.model('mobile', mobileSchema)

module.exports = MOBILE