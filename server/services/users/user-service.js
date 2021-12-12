const userDao = require("./user-dao");

module.exports = (app) => {
  const findAllUsers = (req, res) =>
    userDao.findAllUsers().then((users) => res.json(users));

  const findUserById = (req, res) => {
    console.log("finding");
    if (req.session.profile) {
      console.log("here");
      return userDao
        .findUserById(req.session.profile._id, req.params.userId)
        .then((user) => res.json(user));
    } else {
      console.log("there");
      userDao.findUserById(0, req.params.userId).then((user) => {
        console.log(user);
        res.json(user);
      });
    }
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
      return userDao.follow(req.session.profile._id, req.params.userId).then(status => res.json(status));
  }

  const logout = (req, res) => res.send(req.session.destroy());

  app.post("/api/login", login);
  app.post("/api/register", register);
  app.post("/api/profile", profile);
  app.post("/api/logout", logout);
  app.put("/api/users", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.post("/api/users/:userId/follow", follow);
};
