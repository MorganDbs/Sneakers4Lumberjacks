const Sneakers = require('./models/Sneakers');
var fixtures = require('node-mongoose-fixtures');

fixtures.reset();

fixtures({
    Sneakers: [
        {
            brand: 'Nike',
            model: "vapormax",
            price: "50",
            available: {
                size1 : {
                    size: 41,
                    quantity: 3,
                    available: true
                },
                size2 : {
                    size: 42,
                    quantity: 3,
                    available: true
                },
                size3 : {
                    size: 43,
                    quantity: 3,
                    available: true
                }
            },
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
            available: {
                size1: {
                    size: 41,
                    quantity: 1,
                    available: true
                },
                size2: {
                    size: 45,
                    quantity: 3,
                    available: true
                },
                size3: {
                    size: 42,
                    quantity: 2,
                    available: true
                }
            },
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
            available: {
                size1: {
                    size: 41,
                    quantity: 4,
                    available: true
                },
                size2: {
                    size: 40,
                    quantity: 3,
                    available: true
                },
                size3: {
                    size: 45,
                    quantity: 1,
                    available: true
                }
            },
            place: {
                name: "Rocheuses",
                lattitude: "44.408828",
                longitude: " -109.772155"
            }
        },
    ]
}, function (err, data) {
    // data is an array of all the documents created 
});