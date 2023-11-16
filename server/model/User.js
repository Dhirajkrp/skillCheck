const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userinfo = new Schema({
  name: {
    type: String,
  },
  emailID: {
    type: String,
  },
  password: {
    type: String,
  },
  rollNo: {
    type: String,
  },
});

module.exports = mongoose.model("User", userinfo);
