const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nearby-transit');

const schema = mongoose.Schema({
  _id: Number,
  nearbyTransitOptions: [{
    type: String,
    name: String
  }]
});

const nearbyTransitModel = mongoose.model('nearby-transit', schema);