const express = require("express");
const { login, signup, getUserByID } = require("../controllers/userController");
const router = express.Router();

router.route("/login").get(login);
router.route("/signup").post(signup);

router.route("/getUser/:id").get(getUserByID);

module.exports = router;
