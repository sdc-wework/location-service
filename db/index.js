const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nearby-transit');

const optionsSchema = mongoose.Schema({
  name: String,
  type: String
})

const schema = mongoose.Schema({
  _id: Number,
  nearbyTransitOptions: [optionsSchema]
});

const nearbyTransitModel = mongoose.model('nearby-transit', schema);

const getNearbyTransitOptions = async id => (
  await nearbyTransitModel.findOne({_id: id})
);

module.exports = {
  getNearbyTransitOptions
}