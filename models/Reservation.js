const mongoose = require('mongoose');
//const Command=mongoose.model('Command').schema;
const reservationSchema = new mongoose.Schema({
  startDate:{type:Date,default: Date.now },
  endDate:{type:Date,default: startDate},
  commandId:{type:Schema.Types.ObjectId, ref:'Command'},

}, { timestamps: true });
const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;