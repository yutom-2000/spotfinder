const userDao = require("./user-dao");

module.exports = (app) => {
  const findAllUsers = (req, res) =>
    userDao.findAllUsers().then((users) => res.json(users));

  const findUserById = (req, res) => {
    console.log("finding");
    userDao
      .findUserById(
        req.session.profile ? req.session.profile._id : 0,
        req.params.userId
      )
      .then((user) => res.json(user));
  };

  const deleteUser = (req, res) =>
    userDao.deleteUser(req.params.userId).then((status) => res.send(status));

  const updateUser = (req, res) =>
    userDao.updateUser(req.body).then((status) => res.send(status));

  const login = (req, res) => {
    userDao.findByUsernameAndPassword(req.body).then((user) => {
      if (user) {
        req.session["profile"] = user;
        res.json(user);
        return;
      }
      res.sendStatus(403);
    });
  };

  const register = (req, res) => {
      console.log(req.body);
    userDao.findByUsername(req.body).then((user) => {
      if (user) {
        res.sendStatus(404);
        return;
      }
      userDao.createUser(req.body).then((user) => {
        req.session["profile"] = user;
        res.json(user);
      });
    });
  };

  const profile = (req, res) => {
    if (req.session.profile) {
      return userDao
        .findUserById(req.session.profile._id, req.session.profile._id)
        .then((status) => res.json(status));
    } else res.json();
  };

  const follow = (req, res) => {
    return userDao
      .follow(req.session.profile._id, req.params.userId)
      .then((status) => res.json(status));
  };

  const saveSpot = (req, res) =>
    userDao
      .saveSpot(req.session.profile._id, req.params.spotId)
      .then((status) => res.send(status));

  const logout = (req, res) => res.send(req.session.destroy());

  const findSavedSpots = (req, res) => {
      userDao.findSavedSpots(req.session.profile._id).then((user) => res.json(user));
  }

  app.post("/api/login", login);
  app.post("/api/register", register);
  app.post("/api/profile", profile);
  app.post("/api/logout", logout);
  app.put("/api/users", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/profile/saved", findSavedSpots);
  app.get("/api/users/:userId", findUserById);
  app.post("/api/users/:userId/follow", follow);
  app.put("/api/profile/saveSpot/:spotId", saveSpot);
  
};
