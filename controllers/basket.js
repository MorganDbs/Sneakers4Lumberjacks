const Basket = require('../models/Basket.js');
const Sneakers = require('../models/Sneakers.js');

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
        Sneakers.find({ model: req.body.model, size: req.body.size }, function (err, docs2) {
            var qt = docs2[0].quantity;
            qt--;
            console.log(qt);
            Sneakers.findOneAndUpdate({ _id: docs2[0]._id }, { $set: { quantity: qt } }, function (err, user) {
            });
        });
        
        Basket.find((err, docs) => {
            res.render('basket', { basket: docs});
        });
    });
};

exports.getBasket = (req, res) => {
    Basket.find((err, docs) => {
        res.render('basket', { basket: docs });
    });
};

exports.deleteItemBasket = (req, res) => {
    Basket.remove({ _id: req.params.id }, function (err) {
        res.redirect("/basket");
    });
};