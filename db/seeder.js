const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nearby-transit');

let schema = mongoose.Schema({
  _id: Number,
  nearbyTransitOptions: [{
    type: String,
    name: String
  }]
});

let nearbyTransitModel = mongoose.model('nearby-transit', schema);