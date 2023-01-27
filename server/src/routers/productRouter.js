const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const verify = require("../middlewares/middleware");

router.get("/item", verify.verifyToken, productController.getItem);

router.get("/item/:id", productController.getProduct);

router.get("/all", productController.getAll);

router.get("/filter", productController.filterProduct);

router.post("/create", productController.createItem);

router.delete("/delete/:id", productController.deleteProduct);

router.put("/item/update/:id", productController.updateProduct);

module.exports = router;
