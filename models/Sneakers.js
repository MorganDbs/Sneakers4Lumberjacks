const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const sneakersSchema = new mongoose.Schema({
  size: Number,
  model: String,
  quantity: Number
}, { timestamps: true });
const Sneakers = mongoose.model('Sneakers', sneakersSchema);
module.exports = Sneakers;
