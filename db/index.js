const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nearby');


const optionsSchema = mongoose.Schema({
  name: String,
  type: String
})

const schema = mongoose.Schema({
  _id: Number,
  nearbyTransitOptions: [optionsSchema]
});

const nearbyTransitModel = mongoose.model('nearby', schema);

const getNearbyTransitOptions = async id => (
  await nearbyTransitModel.findOne({_id: id})
);

const addNearbyTransitOptions = async (json) => {
  let lastRow = await nearbyTransitModel.find({}).sort({_id:-1}).limit(1);
  let option = {
    _id: lastRow[0]._id+1,
    nearbyTransitOptions: [json]
  }
  await nearbyTransitModel.create(option);
};

const updateNearbyTransitOptions = async (id, json) => {
  await nearbyTransitModel.updateOne({_id: id, "nearbyTransitOptions": [json]});
};

const deleteNearbyTransitOptions = async (id) => {
  await nearbyTransitModel.deleteOne({_id: id});
};

module.exports = {
  getNearbyTransitOptions,
  addNearbyTransitOptions,
  updateNearbyTransitOptions,
  deleteNearbyTransitOptions
}