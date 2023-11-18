const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let language1 = new Schema({
  name: {
    required: true,
    type: String,
  },
  topics: {
    type: [String],
    required: true,
  },
  langImg: {
    type: String,
  },
});

module.exports = mongoose.model("Language", language1);
