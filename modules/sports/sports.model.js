const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const sportsSchema = new Schema({
    playerName: {
        type: String,
        required: true
    },
    sportsName: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    playerAge: {
        type: Number,
        required: true
    },
    playerWeight: {
        type: Number,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let SPORTS = mongoose.model('sports', sportsSchema)

module.exports = SPORTS