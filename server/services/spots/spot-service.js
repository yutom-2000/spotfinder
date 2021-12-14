const spotDao = require("./spot-dao");
const userDao = require("../users/user-dao");
const spotModel = require("./spot-model");

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

    const findSpotQuery = (req, res) => {
        console.log(req.query);
        req.query = req.query.name ? {...req.query, name: {"$regex": `.*${req.query.name}.*`, "$options": "i"}} : req.query;
        req.query = req.query.description ? {...req.query, description: {"$regex": `.*${req.query.description}.*`, "$options": "i"}} : req.query

        spotDao.findSpotQuery(req.query).then(spots => res.json(spots));
    }


  app.get("/api/spots", findAllSpots);
  app.get("/api/spots/query", findSpotQuery)
  app.get("/api/spots/:spotId", findSpotById);
  app.delete("/api/spots/:spotId", deleteSpot);
  app.post("/api/spots", createSpot);
  
};
