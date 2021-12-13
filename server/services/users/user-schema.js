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
  role: { type: String, enum: ['USER', 'ADMIN']},
  spots: [{type: String}],
  followers: [{type: String}],
  following: [{type: String}],
}, {collection: 'users'});
module.exports = userSchema;