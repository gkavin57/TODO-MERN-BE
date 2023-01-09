const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthControllers");

router.post("/signup", AuthController.signUp);
router.post("/login", AuthController.login);

module.exports = router;
