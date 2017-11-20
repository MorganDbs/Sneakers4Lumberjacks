const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const sneakersSchema = new mongoose.Schema({
  size:{type:Number,min:4,max:12,require:true},
  model:String,
}, { timestamps: true });
const Sneakers = mongoose.model('Sneakers', sneakersSchema);
module.exports = Sneakers;
