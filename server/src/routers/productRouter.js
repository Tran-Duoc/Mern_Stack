const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const verify = require("../middlewares/middleware");

router.get("/item", verify, productController.getItem);

router.post("/create", verify, productController.createItem);

module.exports = router;
