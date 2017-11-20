const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  brand: {type:String, require: true}
}, { timestamps: true });


const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
