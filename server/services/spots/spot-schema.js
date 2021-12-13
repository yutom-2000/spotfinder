const mongoose = require("mongoose");
const spotSchema = mongoose.Schema(
  {
    image: { type: String, default: "/images/spots/blank-spot.png" },
    name: String,
    type: { type: String, enum: ["food", "entertainment", "park"] },
    author: String,
    description: String,
    location: [Number, Number],
  },
  { collection: "spots" }
);
module.exports = spotSchema;
