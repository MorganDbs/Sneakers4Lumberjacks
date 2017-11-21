const Sneakers = require('./models/Sneakers');
const Place=require('./models/Place');
const Brand=require('./models/Brand');
const Model=require('./models/Model');
var fixtures = require('node-mongoose-fixtures');

fixtures.reset();

fixtures({
    Place : [
      {
        name: 'Aneto',
        latitude: 42.632082,
        longitude: 0.656752
      },
      {
        name: "Mont Blanc",
        latitude: 45.833010,
        longitude: 6.865432
      },
      {
        name: "Aspen",
        latitude: 39.201270,
        longitude: -106.788660
      },
      {
        name: "Rokua",
        latitude: 64.563729,
        longitude: 26.510911
      }
  ],
    Brand : [
      {brand: 'Adidas'},
      {brand: 'Nike'},
      {brand: 'Jordan'},

    ],
    Model : [
      {
        brand: 'Adidas',
        model:"climacool",
        description: "Chaussure adequate pour travailler au mont Aneto",
        place:"Aneto",
        price: "70",
        
      },
      {
        brand: 'Nike',
        model:'vapormax',
        place:"Mont Blanc",
        description: "Chaussure adequate pour travailler dans le mont blanc",
        price: "50",
      },

      {
        brand: 'Jordan',
        description: "Chaussure adequate pour travailler a Aspen",
        model: 'kaws',
        place: "Aspen",
        price: "100",
      },
      {
          brand: 'Nike',
          description: "Chaussure adequate pour travailler au parc national de Rokua",
          model: 'presto',
          place: "Rokua",
          price: "60",
      },
    ],

    Sneakers: [
        {
            model: "climacool",
            size: 40,
            quantity: 4
        },
        {
            model: "climacool",
            size: 41,
            quantity: 2
        },
        {
            model: "climacool",
            size: 42,
            quantity: 2
        },
        {
            model: "presto",
            size: 42,
            quantity: 1
        },
        {
            model: "vapormax",
            size: 40,
            quantity: 2
        },
        {
            model: "vapormax",
            size: 41,
            quantity: 2
        },

        {
            model: "vapormax",
            size: 42,
            quantity: 2
        },

        {
            model: "kaws",
            size: 40,
            quantity: 2

        },
        {
            model: "kaws",
            size: 41,
            quantity: 2

        },

        {
            model: "kaws",
            size: 42,
            quantity: 2

        },
    ]
}, function (err, data) {
    // data is an array of all the documents created
});
