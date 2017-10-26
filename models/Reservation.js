const mongoose = require('mongoose');
const Schema=mongoose.schema;
//const Command=mongoose.model('Command').schema;
//const Snea=mongoose.model('Reservation').schema;
const reservationSchema = new mongoose.Schema({
  startDate:{type:Date,default: Date.now },
  endDate:{type:Date,default: startDate},
  commandId:{type:Schema.Types.ObjectId, ref:'Command',require:true},
  SneakersId:{type:Schema.Types.ObjectId, ref:'Sneakers',require:true}

}, { timestamps: true });
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;