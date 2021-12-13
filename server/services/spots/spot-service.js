const spotDao = require("./spot-dao");
const userDao = require("../users/user-dao");

module.exports = (app) => {
  const findAllSpots = (req, res) =>
    spotDao.findAllSpots().then((spots) => res.json(spots));

  const findSpotById = (req, res) =>
    spotDao.findSpotById(req.params.spotId).then((spot) => res.json(spot));

  const deleteSpot = (req, res) =>
    spotDao.deleteSpot(req.params.spotId).then((status) => res.send(status));

  const createSpot = (req, res) => {
      console.log(req.body);
    spotDao.createSpot({...req.body, author: req.session.profile._id}).then((spot) => res.json(spot));}

  app.get("/api/spots", findAllSpots);
  app.get("/api/spots/:spotId", findSpotById);
  app.delete("/api/spots/:spotId", deleteSpot);
  app.post("/api/spots", createSpot);
};
