const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const verify = require("../middlewares/middleware");

router.get("/item", verify.verifyToken, productController.getItem);

router.get("/item/:id", productController.getProduct);

router.get("/all", productController.getAll);

router.post("/create", verify.verifyToken, productController.createItem);

router.delete(
   "/delete/:id",
   verify.verifyDelete,
   productController.deleteProduct
);

router.put(
   "/item/update/:id",
   verify.verifyToken,
   productController.updateProduct
);

module.exports = router;
