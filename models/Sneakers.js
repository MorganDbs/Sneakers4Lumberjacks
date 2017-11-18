const mongoose = require('mongoose');

const sneakersSchema = new mongoose.Schema({
    brand: String,
    model: String,
    price: Number,
    available: {
        size1: {
            size: Number,
            quantity: Number,
            available: Boolean
        },
        size2: {
            size: Number,
            quantity: Number,
            available: Boolean
        },
        size3: {
            size: Number,
            quantity: Number,
            available: Boolean
        }
    },
    place: {
        name: String,
        lattitude: String,
        longitude: String
    }
}, { timestamps: true });
const Sneakers = mongoose.model('Sneakers', sneakersSchema);
module.exports = Sneakers;