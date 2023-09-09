const express = require("express");
const  PageController = require('../controllers/pageController')
const router = express.Router();

router.get("/", PageController.index);

module.exports = router;
