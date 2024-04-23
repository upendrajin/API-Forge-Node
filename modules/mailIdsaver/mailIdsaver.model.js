const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const mailIdSchema = new Schema({
    mailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    recoveryMailId: {
        type: String,
        required: true
    },
    Idtype: {
        type: String,
        enum: ['personal','work'],
        default: 'personal',
        required: true
    },
    Name: {
       firstName: {
        type: String,
        required: true
       },
       lastName: {
        type: String,
        required: true
       }
    },
    tempId: {
        type: String,
        required: true
    }
});

let MAILID = mongoose.model('mailId', mailIdSchema)

module.exports = MAILID