const Sneakers = require('../models/Sneakers.js');

exports.getAllSneakerss = (req, res) => {
    Sneakers.find((err, docs) => {
        res.render('sneakers', { sneakers: docs });
    });
};