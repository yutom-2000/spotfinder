const mongoose = require('mongoose');
const spotModel = require("../spots/spot-model")
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  secret: String,
  profilePicture: {
    type: String,
    default: "/images/profile/blank-profile.png",
  },
  bannerPicture: { type: String, default: "/images/profile/banner.png" },
  joinDate: Date,
  birthday: Date,
  bio: String,
  role: { type: String, enum: ['USER', 'ADMIN']},
  spots: [{type: mongoose.SchemaTypes.ObjectId, ref: "SpotModel"}],
  followers: [{type: mongoose.SchemaTypes.ObjectId, ref: "UserModel"}],
  following: [{type: mongoose.SchemaTypes.ObjectId, ref: "UserModel"}],
}, {collection: 'users'});
module.exports = userSchema;