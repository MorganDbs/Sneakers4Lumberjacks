const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  placeName: String,
  coordX: Number,
  coordY: Number
}, { timestamps: true });


const Place = mongoose.model('Place', modelSchema);

module.exports = Place;
