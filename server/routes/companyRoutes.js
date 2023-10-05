const express = require("express");
const {
  getAllCompanies,
  getCompanyById,
  createCompany,
  deleteCompany,
  updateCompany,
  getProfiles,
} = require("../controllers/companyController");
const router = express.Router();

router.route("/").get(getAllCompanies).post(createCompany);

router
  .route("/:id")
  .get(getCompanyById)
  .patch(updateCompany)
  .delete(deleteCompany);

router.route("/profiles/:id").get(getProfiles);

module.exports = router;
