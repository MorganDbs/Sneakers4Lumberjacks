const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

var fixtures = require('node-mongoose-fixtures');

fixtures({
    Book: [
        { name: 'Enders Game' },
        { name: 'Speaker of the Dead' }
    ]
}, function (err, data) {
    // data is an array of all the documents created 
});