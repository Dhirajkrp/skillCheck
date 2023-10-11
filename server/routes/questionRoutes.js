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
// / api/questtion/
router.route("/").get(getAllQuestions).post(createQuestion);

// api/questtion/101
router
  .route("/:id")
  .get(getQuestionById)
  .patch(updateQuestion)
  .delete(deleteQuestion);

// api/questions/tag/basic
router.route("/tag/:tagName").get(getQuestionsByTag);

router.route("/lang/:language").get(getQuestionsByLanguage);

module.exports = router;
