const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    Id: {
        documentType: {
            type: String,
            required: true
        },
        documentNumber: {
            type: String,
            required: true
        }
    },
    roomNo: {
        type: String,
        required: true
    },
    time: {
        entryTime: {
            type: Date,
            required: true
        },
        exitTime: {
            type: Date,
            required: true
        }
    },
    paymentStatus: {
        type: String,
        enum: ['panding', 'done'],
        default: 'panding',
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let HOTEL = mongoose.model('hotel', hotelSchema)

module.exports = HOTEL