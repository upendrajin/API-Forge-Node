const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let INSURANCE = mongoose.model('insurance', insuranceSchema)

module.exports = INSURANCE