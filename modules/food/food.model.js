const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    energy: {
        type: Number,
        required: true
    },
    protine: {
        type: Number,
        required: true
    },
    carbohydrate: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    tempId: {
        type: String,
        required: true
    }
});

let FOOD = mongoose.model('food', foodSchema)

module.exports = FOOD