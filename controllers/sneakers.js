const Sneakers = require('../models/Sneakers.js');
const Model = require('../models/Model.js');

exports.getAllSneakerss = (req, res) => {
    Model.find((err, docs) => {
        res.render('sneakers', {  sneakers: docs,title:'Sneakers'});
    });
};

exports.getSneakers = (req, res) => {
    var name = req.params.name;
    res.locals.login = req.isAuthenticated();
    Model.find({ model: name }, function (err, docs) {
        Sneakers.find({ model: name, quantity: { $gt: 0 } }, function (err, docs2) {    
            res.render('sneakersDescription', { sneakersdes: docs, size: docs2, auth: res.locals.login});
        });
    });
};