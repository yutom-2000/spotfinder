const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  secret: String,
  lastName: String,
  profilePicture: {
    type: String,
    default: "/images/profile/blank-profile.png",
  },
  bannerPicture: { type: String, default: "/images/profile/banner.png" },
  joinDate: Date,
  birthday: Date,
  bio: String,
  spots: [String],
  followers: [String],
  following: [String],
}, {collection: 'users'});
module.exports = userSchema;