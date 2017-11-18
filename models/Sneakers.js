const mongoose = require('mongoose');

const sneakersSchema = new mongoose.Schema({
    brand: String,
    model: String,
    price: Number,
    size: Number,
    available: Boolean,
    place: {
        name: String,
        lattitude: String,
        longitude: String
    }
}, { timestamps: true });
const Sneakers = mongoose.model('Sneakers', sneakersSchema);
module.exports = Sneakers;