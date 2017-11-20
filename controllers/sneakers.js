const Sneakers = require('../models/Sneakers.js');
const Model =require('../models/Model.js');
var Basket= require('../models/Basket');
exports.getAllSneakerss = (req, res) => {
    Model.find((err, docs) => {
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
  var sneakersid = req.params.id;
  var basket = new Basket(req.session.basket ? req.session.basket : {sneakers:{}});
  Sneakers.findById(sneakersid,function(err,sneakers){
    if(err){
      return res.redirect('/');
    }
    basket.add(sneakers,sneakers.id);
    req.session.basket=basket;
    res.redirect('/');
  });
};
exports.seeBasket=(req,res)=>{
    res.render('basket');
}
