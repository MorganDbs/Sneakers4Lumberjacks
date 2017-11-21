const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const basketSchema = new mongoose.Schema({
  duree: Number,
  totalPrice:{type: Number, min:0},
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  model: String,
  brand: String,
  size: Number
}, { timestamps: true });

const Basket = mongoose.model('Basket', basketSchema);

module.exports = Basket;