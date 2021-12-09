const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  profilePicture: String,
  firstName: String,
  lastName: String,
}, {collection: 'users'});
module.exports = userSchema;