const mongoose = require('mongoose');
const Schema=mongoose.Schema;
//const Brand = mongoose.model('Brand').schema;
//const Place = mongoose.model('Place').schema;

const modelSchema = new mongoose.Schema({
  brand: String,
  place: String,
  model: {type:String,require:true},
  price: {type: Number, min: 0, default:0},
  description:String,
}, { timestamps: true });


const Model = mongoose.model('Model', modelSchema);

module.exports = Model;
