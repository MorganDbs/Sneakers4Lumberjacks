const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  brand: String
}, { timestamps: true });

var fixtures = require('node-mongoose-fixtures');

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;

fixtures.reset(Brand);

fixtures({
    Brand: [
        { brand: 'Nike' },
        { brand: 'Adidas' },
        { brand: 'Asics' },
        { brand: 'Puma' },
        { brand: 'Jordan' }
    ]
}, function (err, data) {
    // data is an array of all the documents created 
});