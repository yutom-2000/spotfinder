const userModel = require("./user-model");

const findAllUsers = () => userModel.find();

const findUserById = (authId, userId) => {
  console.log(userId);
  console.log(authId);
  if (authId === userId) {
    console.log("authed find");
    return userModel.findById(userId);
  } else {
    console.log("unauthed find");
    return userModel.findById(userId).select("-secret -birthday");
  }
};

const findByUsernameAndPassword = ({ username, password }) =>
  userModel.findOne({ username, password });

const findByUsername = ({ username }) => userModel.findOne({ username });

const createUser = (user) => userModel.create(user);

const updateUser = (user) =>
  userModel.updateOne(
    { _id: user._id },
    {
      $set: user,
    }
  );

const deleteUser = (userId) => userModel.deleteOne({ _id: userId });

const follow = (profileId, userId) =>
  userModel
    .updateOne({ _id: profileId }, { $push: { following: userId } })
    .then((res) =>
      userModel.updateOne({ _id: userId }, { $push: { followers: profileId } })
    );

const saveSpot = (profileId, spotId) =>
  userModel.updateOne({ _id: profileId }, { $push: { spots: spotId } });

  const findSavedSpots = (profileId) => {
      console.log("test");
  return userModel.findById(profileId).populate("spots")
  }

module.exports = {
  follow,
  findByUsername,
  findAllUsers,
  findUserById,
  findByUsernameAndPassword,
  createUser,
  updateUser,
  deleteUser,
  saveSpot,
  findSavedSpots,
};
