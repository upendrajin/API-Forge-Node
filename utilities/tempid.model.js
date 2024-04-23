const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const temproryIdSchema = new Schema({
    tempId : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }
});

let TEMPID = mongoose.model('tempid',temproryIdSchema)

module.exports = TEMPID