const mongoose = require('mongoose');
const Schema=mongoose.Schema;
//const User=mongoose.model('User').schema;
const commandSchema = new mongoose.Schema({
  date: {type: Date,default: Date.now},
  userId: {type:Schema.Types.ObjectId, ref:'User',require:true}
}, { timestamps: true });

const Command = mongoose.model('Command', commandSchema);

module.exports = Command;