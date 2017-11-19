const Sneakers = require('../models/Sneakers.js');
const publicIp = require('public-ip');
var geoip = require('geoip-lite');

exports.getClientGeolocation = (req, res) => {
    publicIp.v4().then(ip => {
        var geo = geoip.lookup(ip);
        Sneakers.find((err, docs) => {
            res.render('maps', { places: docs, ip: geo.ll});
        }); 
    });
};