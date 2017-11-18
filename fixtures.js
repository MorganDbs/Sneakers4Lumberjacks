const Sneakers = require('./models/Brand');
var fixtures = require('node-mongoose-fixtures');

fixtures.reset();

fixtures({
    Sneakers: [
        {
            brand: 'Nike',
            model: "vapormax",
            price: "50",
            size: "43",
            available: "true",
            place: {
                name: "Mont Blanc",
                lattitude: "45.833010",
                longitude: "45.833010"
            }
        },

        {
            brand: 'Nike',
            model: "vapormax",
            price: "50",
            size: "42",
            available: "true",
            place: {
                name: "Mont Blanc",
                lattitude: "45.833010",
                longitude: "45.833010"
            }
        },

        {
            brand: 'Nike',
            model: "vapormax",
            price: "50",
            size: "41",
            available: "true",
            place: {
                name: "Mont Blanc",
                lattitude: "45.833010",
                longitude: "45.833010"
            }
        },

        {
            brand: 'Adidas',
            model: "climacool",
            price: "70",
            size: "43",
            available: "true",
            place: {
                name: "Mont Fuji",
                lattitude: "35.361570",
                longitude: "138.728078"
            }
        },

        {
            brand: 'Adidas',
            model: "climacool",
            price: "70",
            size: "42",
            available: "true",
            place: {
                name: "Mont Fuji",
                lattitude: "35.361570",
                longitude: "138.728078"
            }
        },

        {
            brand: 'Adidas',
            model: "climacool",
            price: "70",
            size: "41",
            available: "true",
            place: {
                name: "Mont Fuji",
                lattitude: "35.361570",
                longitude: "138.728078"
            }
        },

        {
            brand: 'Jordan',
            model: "kaws",
            price: "100",
            size: "43",
            available: "true",
            place: {
                name: "Rocheuses",
                lattitude: "44.408828",
                longitude: " -109.772155"
            }
        },
        {
            brand: 'Jordan',
            model: "kaws",
            price: "100",
            size: "42",
            available: "true",
            place: {
                name: "Rocheuses",
                lattitude: "44.408828",
                longitude: " -109.772155"
            }
        },
        {
            brand: 'Jordan',
            model: "kaws",
            price: "100",
            size: "41",
            available: "true",
            place: {
                name: "Rocheuses",
                lattitude: "44.408828",
                longitude: " -109.772155"
            }
        }
    ]
}, function (err, data) {
    // data is an array of all the documents created 
});