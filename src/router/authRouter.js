const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.get("/login", AuthController.login)

router.post("/login", AuthController.check)

module.exports  = router;