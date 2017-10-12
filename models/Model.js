const mongoose = require('mongoose');
//const Brand = mongoose.model('Brand').schema;
//const Place = mongoose.model('Place').schema;

const modelSchema = new mongoose.Schema({
  brandId: {type:Schema.Types.ObjectId, ref:'Brand'},
  placeId: {type:Schema.Types.ObjectId, ref:'Place'},
  modelName: String,
  price: {type: Number, min: 0},
  sex: String
}, { timestamps: true });


const Model = mongoose.model('Model', modelSchema);

module.exports = Brand;
