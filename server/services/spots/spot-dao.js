const spotModel = require("./spot-model");

const findAllSpots = () => spotModel.find();

const findSpotById = (spotId) => {
  return spotModel.findById(spotId);
};

const deleteSpot = (spotId) => spotModel.deleteOne({ _id: spotId });

const createSpot = (spot) => spotModel.create(spot);

const findSpotQuery = (query) => spotModel.find(query);

module.exports = { findAllSpots, findSpotById, deleteSpot, createSpot, findSpotQuery };
