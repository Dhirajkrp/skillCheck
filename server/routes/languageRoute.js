const express = require("express");
const {
  getAllLanguages,
  getLanguageById,
  createLanguage,
  deleteLanguage,
  updateLanguage,
  getTopics,
} = require("../controllers/languageController");
const router = express.Router();

router.route("/").get(getAllLanguages).post(createLanguage);

router
  .route("/:id")
  .get(getLanguageById)
  .patch(updateLanguage)
  .delete(deleteLanguage);

router.route("/topics/:id").get(getTopics);

module.exports = router;
