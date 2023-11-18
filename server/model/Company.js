const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let compinfo = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  profile: {
    type: [String],
    required: true,
  },
  compImage: {
    type: String,
  },
  websiteLink: {
    type: String,
  },
  topics: {
    type: [
      {
        name: String,
        link: String,
      },
    ],
  },
  faq: {
    type: [
      {
        question: String,
        answer: String,
      },
    ],
  },
});

module.exports = mongoose.model("Company", compinfo);
