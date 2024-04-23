const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const passwordSaverSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    webName: {
        type: String,
        required: true
    },
    webLink: {
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

let PASSWORDSAVER = mongoose.model('passwordSaver', passwordSaverSchema)

module.exports = PASSWORDSAVER