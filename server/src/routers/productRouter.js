const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const verify = require("../middlewares/middleware");

router.get("/item", verify, productController.getItem);

router.get("/item/:id", productController.getProduct);

router.get("/item/all", productController.getAll);

router.post("/create", verify, productController.createItem);

router.put("/item/update/:id", verify, productController.updateProduct);

module.exports = router;
