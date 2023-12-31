const express = require("express");
const {
  getAllReports,
  getReportsById,
  createReports,
  deleteReports,
  updateReports,
  getReportsOfUser,
} = require("../controllers/reportController");
const router = express.Router();

router.route("/").get(getAllReports).post(createReports);

router
  .route("/:id")
  .get(getReportsById)
  .patch(updateReports)
  .delete(deleteReports);

router.route("/all/:userId").get(getReportsOfUser);

// router.route("/profiles/:id").get(getProfiles);

module.exports = router;
