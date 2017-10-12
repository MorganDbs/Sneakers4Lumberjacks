const mongoose = require('mongoose');
//const User=mongoose.model('User').schema;
const commandSchema = new mongoose.Schema({
  date: {type: Date,default: Date.now},
  totalPrice:{type: Number, min:0},
  userId: {type:Schema.Types.ObjectId, ref:'User'},
}, { timestamps: true });

const Command = mongoose.model('Command', commandSchema);

module.exports = Command;