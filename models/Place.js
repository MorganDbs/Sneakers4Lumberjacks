const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  placeName: {type: String, require:true},
  coordX: {type:Number, require:true},
  coordY: {type:Number,require:true}
}, { timestamps: true });


const Place = mongoose.model('Place', modelSchema);

module.exports = Place;
