const Basket = require('../models/Basket.js');

exports.addBasket = (req, res) => {
    new Basket({
        duree: req.body.duree,
        size: req.body.size,
        totalPrice: req.body.duree * parseInt(req.body.price, 10),
        userId: req.session.passport.user,
        model: req.body.model,
        brand: req.body.brand,
        size: req.body.size
    }).save(function (err, doc) {
        Basket.find((err, docs) => {
            res.render('basket', { basket: docs});
        });
    });
};

exports.getBasket = (req, res) => {
    Basket.find((err, docs) => {
        console.log(docs);
        res.render('basket', { basket: docs });
    });
};