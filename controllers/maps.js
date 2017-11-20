const Model = require('../models/Model.js');
const Place = require('../models/Place.js');
const publicIp = require('public-ip');
var geoip = require('geoip-lite');

exports.getClientGeolocation = (req, res) => {
    publicIp.v4()
        .then(ip => {
            var geo = geoip.lookup(ip);
            Model.find((err, docs) => {
                Place.find((err, docs_places) => {
                    res.render('maps', { sneakers: docs, places: docs_places, ip: geo.ll });
                });
            }); 
        })
        .catch((err) => {
            Model.find((err, docs) => {
                Place.find((err, docs_places) => {
                    res.render('maps', { sneakers: docs, places: docs_places, ip: null });
                });
            }); 
        });
};
