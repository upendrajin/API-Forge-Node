const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    posterURL : {
        type: String,
        required: true
    },
    movieName: {
        type: String,
        required: true
    },
    runningTime: {
        type: Number,
        required: true
    },
    availableOn: {
        type: String,
        required: true
    },
    movieType: {
        type: String,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let MOVIE = mongoose.model('movie',movieSchema)

module.exports = MOVIE