const Sneakers = require('./models/Sneakers');
var fixtures = require('node-mongoose-fixtures');

fixtures.reset();

fixtures({
    Sneakers: [
        {
            brand: 'Adidas',
            model: "climacool",
            price: "70",
            description: "Chaussure adequate pour travailler au mont Aneto",
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
                name: "Aneto",
                latitude: 42.632082,
                longitude: 0.656752
            }
        },

        {
            brand: 'Nike',
            model: "vapormax",
            price: "50",
            description: "Chaussure adequate pour travailler dans le mont blanc",
            available: {
                size1: {
                    size: 41,
                    quantity: 3,
                    available: true
                },
                size2: {
                    size: 42,
                    quantity: 3,
                    available: true
                },
                size3: {
                    size: 43,
                    quantity: 3,
                    available: true
                }
            },
            place: {
                name: "Mont Blanc",
                latitude: 45.833010,
                longitude: 6.865432
            }
        },

        {
            brand: 'Jordan',
            model: "kaws",
            price: "100",
            description: "Chaussure adequate pour travailler à Aspen",
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
                name: "Aspen",
                latitude: 39.201270,
                longitude: -106.788660
            }
        },
    ]
}, function (err, data) {
    // data is an array of all the documents created 
});