const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

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
  if (!data || !data.questions) {
    return res.status(404).json({ message: "No questions available" });
  }

  return res.status(200).json(data.questions);
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

  const result = data.questions.filter((qeus) => qeus._id === +questionID);
  if (result.length === 0) {
    return res
      .status(404)
      .json({ message: `No question found for the id ${questionID}` });
  }
  return res.status(200).json(result);
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
const getQuestionsByTag = (req, res) => {
  const { tagName: tag } = req.params;

  if (!tag) {
    return res.status(400).json({ message: "tag required" });
  }
  const result = data.questions.filter((ques) => ques.tags.includes(tag));

  if (result.length === 0) {
    return res.status(404).json({ message: `No questions found for : ${tag}` });
  }
  return res.status(200).json(result);
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
  let { question, options, answer, tags, contentType } = req.body;

  // validating all the input values before adding to the database.
  if (!question) {
    return res.status(400).json({ message: "Question is required" });
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

  const newQuestion = {
    _id: data.questions.slice(-1)[0]._id + 1 || 1,
    question,
    options,
    answer,
    tags,
    contentType,
  };

  data.setQuestions([...data.questions, newQuestion]);

  await fsPromises.writeFile(
    path.join(__dirname, "..", "data", "questions.json"),
    JSON.stringify(data.questions),
    "utf8"
  );

  return res.status(201).json(newQuestion);
};

/*
function to delete a question :
parameters :
    question id
status:
    204, success , no content to send back.
    404 , if there is no question with the id.
*/
const deleteQuestion = async (req, res) => {
  const { id: questionID } = req.params;

  if (!questionID) {
    return res.status(400).json({ message: `Id required` });
  }

  const result = data.questions.filter((ques) => ques._id === +questionID);
  if (result.length === 0) {
    return res
      .status(404)
      .json({ message: `No question found for the id ${questionID}` });
  }

  // exculde the question having the given question id.
  const filteredQuestions = data.questions.filter(
    (ques) => ques._id !== +questionID
  );

  data.setQuestions(filteredQuestions);

  //updating the file with the filtered question.
  await fsPromises.writeFile(
    path.join(__dirname, "..", "data", "questions.json"),
    JSON.stringify(data.questions),
    "utf8"
  );

  return res.sendStatus(204);
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
  const { question, options, answer, tags, contentType } = req.body;

  if (!questionID) {
    return res.status(400).json({ message: `Id required` });
  }

  const currentQuestion = data.questions.find(
    (ques) => ques._id === +questionID
  );
  if (!currentQuestion) {
    return res
      .status(404)
      .json({ message: `No question found for the id ${questionID}` });
  }

  if (!question && !options && !answer && !tags && !contentType) {
    return res.status(400).json({ message: "No fields specified for updates" });
  }

  //validate the new data
  // if (question) {
  //   if (typeof quetion !== String || quetion.length < 5) {
  //     return res
  //       .status(400)
  //       .json({ message: "Question should be a string ,with min length 5." });
  //   }

  // }
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
    _id: parseInt(questionID),
    question: question || currentQuestion.question,
    options: options || currentQuestion.options,
    answer: answer == 0 ? answer : answer || currentQuestion.answer,
    tags: tags || currentQuestion.tags,
    contentType: contentType || currentQuestion.contentType,
  };

  //updating the file and questions array.

  const otherQuestions = data.questions.filter(
    (ques) => ques._id !== +questionID
  );

  data.setQuestions([...otherQuestions, updatedQuestion]);

  //sorting the array based on id after updating the question.
  data.questions.sort((a, b) => a._id - b._id);

  await fsPromises.writeFile(
    path.join(__dirname, "..", "data", "questions.json"),
    JSON.stringify(data.questions),
    "utf8"
  );

  return res.status(202).json(updatedQuestion);
};

module.exports = {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestionsByTag,
};
