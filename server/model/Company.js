const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let compinfo = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  profile:{
    type: [String]
  },
  compImage:{
    data: Buffer,
    contentType: String
  },
  websiteLink:{
    type:String
  }
});



module.exports = mongoose.model("Company", compinfo);