const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    pesantName: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    diseaseType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    medicineName: {
        type: String,
        required: true
    },
    wardType: {
        type: String,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let HOSPITAL = mongoose.model('hospital', hospitalSchema)

module.exports = HOSPITAL