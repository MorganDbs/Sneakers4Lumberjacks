
const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {type: String, require:true},
  latitude: {type:Number, require:true},
  longitude: {type:Number,require:true}
}, { timestamps: true });


const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
