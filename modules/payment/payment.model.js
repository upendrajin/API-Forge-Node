const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentType : {
        type: String,
        enum: ['credit','debit'],
        required: true
    },
    accountType : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    amount : {
        type: Number,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }

});

let PAYMENT = mongoose.model('payment',paymentSchema)

module.exports = PAYMENT