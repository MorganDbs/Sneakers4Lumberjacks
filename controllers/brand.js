const Brand = require('../models/Brand.js');

exports.getBrands = (req, res) => {
  Brand.find((err, docs) => {
    res.render('brand', { brands: docs });
  });
};