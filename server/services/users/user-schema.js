const mongoose = require('mongoose');
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
  type: { type: String, enum: ['user', 'admin']},
  spots: [String],
  followers: [String],
  following: [String],
}, {collection: 'users'});
module.exports = userSchema;