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
  image: {
    type: String,
  },
  resources: [
    {
      name: String,
      link: String,
    },
  ],
  faq: [
    {
      question: String,
      answer: String,
    },
  ],
});

module.exports = mongoose.model("Language", language);
