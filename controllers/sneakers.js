const Sneakers = require('../models/Sneakers.js');

exports.getAllSneakerss = (req, res) => {
    Sneakers.find((err, docs) => {
        res.render('sneakers', {  sneakers: docs,title:'Sneakers'});
    });
};

exports.getSneakers = (req, res) => {
    var name = req.params.name;
    Sneakers.find({ model: name }, function (err, docs) {
        res.render('sneakersDescription', {
          sneakersdes: docs
        });
    });
};
