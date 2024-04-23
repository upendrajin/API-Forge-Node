const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const gstSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gstno: {
        type: String,
        required: true
    },
    baseamount: {
        type: Number,
        required: true
    },
    gstpercentage: {
        type: Number,
        required: true
    },
    totalamount: {
        type: Number,
        required: true
    },
    invoiceno: {
        type: Number,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let GST = mongoose.model('gstinvoice', gstSchema)

module.exports = GST