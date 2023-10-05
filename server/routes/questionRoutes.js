const express = require("express");
const {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestionsByTag,
  getQuestionsByLanguage,
} = require("../controllers/questionsController");
const router = express.Router();

router.route("/").get(getAllQuestions).post(createQuestion);

router
  .route("/:id")
  .get(getQuestionById)
  .patch(updateQuestion)
  .delete(deleteQuestion);

router.route("/tag/:tagName").get(getQuestionsByTag);

router.route("/lang/:language").get(getQuestionsByLanguage);

module.exports = router;
