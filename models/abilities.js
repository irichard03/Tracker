const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const abilitiesSchema = new Schema({
  
  abilityId: {
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
  hero: {
    type: String,
    required: false
  },

  range: {
    type: Number,
    required: false
  },

  phase: {
    type: String,
    required: true
  }

});

const abilities = mongoose.model("abilities", abilitiesSchema);
module.exports = abilities;