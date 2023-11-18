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
<<<<<<< HEAD
=======

  // Type: {
  //   type: String,
  // },
  // category: {
  //   type: String,
  // },
>>>>>>> 375791a123c443f23195d2a51346b9a3d87d917e
});

module.exports = mongoose.model("Report", Report);
