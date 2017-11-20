const Sneakers = require('../models/Sneakers.js');
const Model = require('../models/Model.js');
var Basket = require('../models/Basket');

exports.getAllSneakerss = (req, res) => {
    Model.find((err, docs) => {
        res.render('sneakers', {  sneakers: docs,title:'Sneakers'});
    });
};

exports.getSneakers = (req, res) => {
    var name = req.params.name;
    res.locals.login = req.isAuthenticated();
    Model.find({ model: name }, function (err, docs) {
        res.render('sneakersDescription', { sneakersdes: docs, auth: res.locals.login});
    });
};

exports.addBasket = (req, res) => {
  var sneakersid = req.params.id;
  var basket = new Basket(req.session.basket ? req.session.basket : { sneakers: {} });
  Model.find({ _id: sneakersid }, (err, docs) => {
      basket.add(docs);
      req.session.basket = basket;
      //console.log(req.session.basket);
      res.redirect('/');
  });

};
exports.seeBasket=(req,res)=>{
    res.render('basket');
}
