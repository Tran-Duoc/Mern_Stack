const Product = require("../models/productModel");

const productController = {
   getAllItem: async (req, res) => {
      res.send("hello get all");
   },
   createItem: async (req, res) => {
      try {
         const { name, price, description, image, rating } = req.body;

         if (!name && !price && !description && !image && !rating) {
            return res.status(404).json({
               success: false,
               message: "require all input",
            });
         }

         if (!name) {
            return res.status(403).json({
               success: false,
               message: "The name Product is empty",
            });
         }
         if (!price) {
            return res.status(403).json({
               success: false,
               message: "The price is empty",
            });
         }
         if (price) {
            if (typeof price === "string") {
               return res.status(400).json({
                  success: false,
                  message: "The price not a number",
               });
            } else if (Number(price) < 0) {
               return res.status(403).json({
                  success: false,
                  message: "The price is not a minus",
               });
            }
         }

         if (!description || description.length < 10) {
            return res.status(403).json({
               success: false,
               message: "The description is empty or very short",
            });
         }
         if (!image || typeof image !== "string") {
            return res.status(403).json({
               success: false,
               message: "The url image is not a string",
            });
         }

         if (!rating || typeof rating !== "number") {
            return res.status(403).json({
               success: false,
               message: "The rating is not a number",
            });
         }

         const newProduct = new Product({
            name: name,
            price: price,
            description: description,
            image: image,
            rating: rating,
         });

         await newProduct.save();
         return res.status(200).json({
            success: true,
            message: "Product saved successfully",
            newProduct,
         });
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });
      }
   },
};

module.exports = productController;
