const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const contackbookSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let CONTACKBOOK = mongoose.model('contackbook', contackbookSchema)

module.exports = CONTACKBOOK