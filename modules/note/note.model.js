const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    date : {
        type: Date,
        required: true
    },
    time : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }

});

let NOTE = mongoose.model('note',noteSchema)

module.exports = NOTE