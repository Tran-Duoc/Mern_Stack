const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.getAllItem);

router.post("/create", productController.createItem);

module.exports = router;
