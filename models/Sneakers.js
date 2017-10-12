const mongoose = require('mongoose');

const sneakersSchema = new mongoose.Schema({
  size:{type:Number,min:4,max:12},


}, { timestamps: true });
const Sneakers = mongoose.model('Sneakers', sneakersSchema);
module.exports = Sneakers;