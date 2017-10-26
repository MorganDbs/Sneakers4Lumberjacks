const mongoose = require('mongoose');
const Schema=mongoose.Schema;
//const Brand = mongoose.model('Brand').schema;
//const Place = mongoose.model('Place').schema;

const modelSchema = new mongoose.Schema({
  brandId: {type:Schema.Types.ObjectId, ref:'Brand',require:true},
  placeId: {type:Schema.Types.ObjectId, ref:'Place',require:true},
  modelName: {type:String,require:true},
  price: {type: Number, min: 0, default:0},
  sex: {type: String,require:true}
}, { timestamps: true });


const Model = mongoose.model('Model', modelSchema);

module.exports = Brand;
