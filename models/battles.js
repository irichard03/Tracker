const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const battleSchema = new Schema({
  battleId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  source: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
});

const battles = mongoose.model("battles", battleSchema);
module.exports = battles;