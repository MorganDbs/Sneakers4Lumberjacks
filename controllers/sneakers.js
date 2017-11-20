const Sneakers = require('../models/Sneakers.js');

exports.getAllSneakerss = (req, res) => {
    Sneakers.find((err, docs) => {
        res.render('sneakers', {  sneakers: docs,title:'Sneakers'});
    });
};

exports.getSneakers = (req, res) => {
    var name = req.params.name;
    res.locals.login = req.isAuthenticated();
    Sneakers.find({ model: name }, function (err, docs) {
        res.render('sneakersDescription', { sneakersdes: docs, auth: res.locals.login});
    });
};

exports.addBasket = (req, res) => {
    console.log(req);
};
