const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");




router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user/:id", userController.getUser);

module.exports = router;
