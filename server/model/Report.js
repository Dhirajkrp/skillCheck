const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Report = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  score: {
    type: Number,
  },
  userId: {
    type: String,
    required: true,
  },
  topics: [
    {
      name: String,
      totalQuestions: Number,
      totalCorrect: Number,
    },
  ],
  totalQuestions: Number,

  // Type: {
  //   type: String,
  // },
  // category: {
  //   type: String,
  // },
});

module.exports = mongoose.model("Report", Report);
