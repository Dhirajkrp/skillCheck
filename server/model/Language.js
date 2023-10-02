const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let language = new Schema({
  name:{
    type:String
  },
  topic:{
    type:[String]
  }
});



module.exports = mongoose.model("lang", language);