const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let language = new Schema({
  name: {
    required: true,
    type: String,
  },
  topics: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Language", language);
