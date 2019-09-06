const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const battlesSchema = new Schema({
  battleId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  }
});

const battles = mongoose.model("battles", battlesSchema);
module.exports = battles;