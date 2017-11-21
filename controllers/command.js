const Command = require('../models/Command.js');
const Sneakers = require('../models/Sneakers.js');
const Basket = require('../models/Basket.js');

exports.validCommand = (req, res) => {
    new Command({
        duree: req.body.duration,
        size: req.body.size,
        totalPrice: req.body.price,
        userId: req.session.passport.user,
        model: req.body.model,
        brand: req.body.brand,
        size: req.body.size,
        address: req.body.address,
        firsname: req.body.firsname,
        surname: req.body.surname
    }).save(function (err, doc) {
        Basket.remove({}, function (err) {
            if (err) {
                console.log(err)
            } else {
                res.render('command_finish');
            }
        }
        );
    });
};

exports.displayCommand = (req, res) => {
    Command.find({ userId: req.user.id }, function(err, docs) {
        res.render('orders', { command: docs });
    });
};