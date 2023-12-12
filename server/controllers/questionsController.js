const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const Question = require("../model/Question");

const data = {
  questions: require("../data/questions.json"),
  setQuestions: function (updated) {
    this.questions = updated;
  },
};

/*
function to get all questions:
parameters :
    none
status:
    200, if there is question.
    404 , if there are no questions.
*/
const getAllQuestions = async (req, res) => {
  try {
    const result = await Question.find({});
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

/*
function to get a question :
parameters :
    question id
status:
    200, if there is question.
    404 , if there is no question with the id.
*/
const getQuestionById = async (req, res) => {
  const { id: questionID } = req.params;
  if (!questionID) {
    return res.status(400).json({ message: "id required" });
  }
  try {
    const question = await Question.find({ _id: questionID });
    return res.status(200).json(question);
  } catch (err) {
    return res.status(500).json({ message: "Cannot resole the question ID" });
  }
};

/*
function to get questions based on tag :
parameters :
    tag: string
status:
    200, success , response with array of questions.
    404 , if there is no question with the tag.
    400, if no tag was specified.
*/
const getQuestionsByTag = async (req, res) => {
  const { tagName: tag } = req.params;
  if (!tag) {
    return res.status(400).json({ message: "tag required" });
  }
  try {
    const raw = await Question.find({});
    const result = raw.filter((ques) => ques.tags.includes(tag));
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: "Cannot resole the tag" });
  }
};
/*
function to get questions based on language :
parameters :
    language: string
status:
    200, success , response with array of questions.
    404 , if there is no question with the tag.
    400, if no tag was specified.
*/
const getQuestionsByLanguage = async (req, res) => {
  const { language } = req.params;
  if (!language) {
    return res.status(400).json({ message: "language required" });
  }
  try {
    const result = await Question.find({ language: language });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

/*
function to create a new question:
parameters :
    question:string ,
    options: array of string
    answer: number which stores the index.
    tags: array of string

status:
    201 , content created.
    400 , bad request , if some values are missing.
*/
const createQuestion = async (req, res) => {
  let { question, language, options, answer, tags, contentType } = req.body;

  // validating all the input values before adding to the database.
  if (!question) {
    return res.status(400).json({ message: "Question is required" });
  }

  if (!language) {
    return res.status(400).json({ message: "language is required" });
  }

  if (!options || !Array.isArray(options)) {
    return res
      .status(400)
      .json({ message: "Options is required and should be an array" });
  }

  if (!tags || !Array.isArray(tags)) {
    return res
      .status(400)
      .json({ message: "Tags is required and should be an array" });
  }
  // checking if the answer is a valid index or not.
  const index = parseInt(answer);
  if (isNaN(index) || index < 0 || index >= options.length) {
    return res
      .status(400)
      .json({ message: "Answer is required and should be a valid index" });
  }

  //setting default values for content type
  if (!contentType || typeof contentType !== Object) {
    contentType = {
      questionType: "text",
      answerType: "text",
    };
  }

  const data = {
    question,
    language,
    options,
    answer,
    tags,
    contentType,
  };

  const newQuestion = new Question(data);
  await newQuestion.save();
  return res.status(201).json(newQuestion);
};

const insertMany = (req, res) => {
  let { questions } = req.body;
  Question.insertMany(questions)
    .then(() => res.sendStatus(201))
    .catch((err) => res.sendStatus(500));
};

/*
function to delete a question :
parameters :
    question id
status:
    204, success , no content to send back.
    404 , if there is no question with the id.
    500 , for internal server error.
*/
const deleteQuestion = async (req, res) => {
  const { id: questionID } = req.params;

  try {
    const result = await Question.findOneAndDelete({ _id: questionID });
    if (!result) {
      return res
        .status(404)
        .json({ message: `No question found for the id : ${questionID}` });
    }
    return res.sendStatus(204);
  } catch (err) {
    return res.sendStatus(500);
  }
};

/*
function to update a question :
parameters :
    questionid
    values to update , can be more than one
    question:string
    options: array of string
    tags: array of string
    answer: index of correct answer.
status:
    400, if no id , or no fields for update is specified.
    202 , if the question is updated successfully.
*/
const updateQuestion = async (req, res) => {
  const { id: questionID } = req.params;
  const { question, language, options, answer, tags, contentType } = req.body;

  let currentQuestion = {};
  try {
    currentQuestion = await Question.find({ _id: questionID });
  } catch (err) {
    return res
      .status(401)
      .json({ message: `Cannot resole the question ID : ${questionID}` });
  }

  if (!currentQuestion) {
    return res
      .status(404)
      .json({ message: `No question found for the id ${questionID}` });
  }

  if (!questionID) {
    return res.status(400).json({ message: `Id required` });
  }

  if (!question && !language && !options && !answer && !tags && !contentType) {
    return res.status(400).json({ message: "No fields specified for updates" });
  }

  if (options) {
    if (!Array.isArray(options) || options.length < 2) {
      return res
        .status(400)
        .json({ message: "Options should be array with atleast 2 elements." });
    }
  }
  if (tags) {
    if (!Array.isArray(tags) || tags.length < 1) {
      return res
        .status(400)
        .json({ message: "Tags should be array with atleast 1 elements." });
    }
  }

  //creating the updating question
  const updatedQuestion = {
    _id: questionID,
    question: question || currentQuestion.question,
    language: language || currentQuestion.language,
    options: options || currentQuestion.options,
    answer: answer == 0 ? answer : answer || currentQuestion.answer,
    tags: tags || currentQuestion.tags,
    contentType: contentType || currentQuestion.contentType,
  };

  let newQuestion = {};
  try {
    newQuestion = await Question.findOneAndUpdate(
      { _id: questionID },
      updatedQuestion,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: err.message });
  }

  if (!newQuestion) {
    return res
      .status(404)
      .json({ message: `No question found for the id ${questionID}` });
  }

  return res.status(202).json(newQuestion);
};

module.exports = {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestionsByTag,
  getQuestionsByLanguage,
  insertMany,
};
