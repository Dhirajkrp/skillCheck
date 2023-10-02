const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  language:{
    type:String,
  },
  options: {
    type: [String],
    required: true,
  },
  answer: {
    type: Number,
    require: true,
  },
  tags: [String],
  contentType: {
    questionType: {
      type: String,
      enum: ["text", "code"],
      default: "text",
    },
    answerType: {
      type: String,
      enum: ["text", "code"],
      default: "text",
    },
  },
});

module.exports = mongoose.model("Question", questionSchema);
