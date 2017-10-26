const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const sneakersSchema = new mongoose.Schema({
  size:{type:Number,min:4,max:12,require:true},
  modelId:{type:Schema.Types.ObjectId, ref:'Model',require:true}
}, { timestamps: true });
const Sneakers = mongoose.model('Sneakers', sneakersSchema);
module.exports = Sneakers;