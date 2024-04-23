const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    songname: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    singer: {
        type: String,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let PLAYLIST = mongoose.model('playlist', playlistSchema)

module.exports = PLAYLIST