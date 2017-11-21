const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const commandSchema = new mongoose.Schema({
    duree: [Number],
    totalPrice: { type: Number, min: 0 },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    model: [String],
    brand: [String],
    size: [Number],
    address: String,
    firsname: String,
    surname: String
}, { timestamps: true });

const Command = mongoose.model('Command', commandSchema);

module.exports = Command;