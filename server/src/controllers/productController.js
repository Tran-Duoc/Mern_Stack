const Product = require("../models/productModel");
const User = require("../models/userModel");
const productController = {
   getItem: async (req, res) => {
      try {
         const product = await Product.find({ user: req.userId });
         return res.status(200).json({
            success: true,
            message: "all item is here",
            length: product.length,
            product,
         });
      } catch (error) {
         res.status(500).json({
            success: false,
            message: error.message,
         });
      }
   },
   getAll: async (req, res) => {
      try {
         const allItem = await Product.find();
         return res.status(200).json({
            success: true,
            message: "all item is here",
            length: allItem.length,
            allItem,
         });
      } catch (error) {
         res.status(500).json({
            success: false,
            message: error.message,
         });
      }
   },
   getProduct: async (req, res) => {
      const id = req.params.id;
      const product = await Product.find({ _id: id });

      return res.status(200).json({
         success: true,
         message: "product is here",
         product,
      });
   },
   createItem: async (req, res) => {
      try {
         const { name, price, description, image, rating, where } = req.body;

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
         if (!image) {
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
            where: where,
            description: description,
            image: image,
            rating: rating,
            user: req.userId,
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
   updateProduct: async (req, res) => {
      try {
         const id = req.params.id;
         const { name, price, description, image, rating } = req.body;
         const isAdmin = await User.findOne({ _id: req.userId });
         console.log(isAdmin.admin);
         let updateProduct = {
            name,
            price,
            description,
            where,
            image,
            rating,
         };

         const conditionWhenUpdateProduct = {
            _id: id,
            user: req.userId,
         };

         console.log(conditionWhenUpdateProduct);
         updateProduct = await Product.findByIdAndUpdate(
            conditionWhenUpdateProduct,
            updateProduct,
            { new: true }
         );
         if (!updateProduct) {
            return res.status(404).json({
               success: false,
               message: "Update product failed",
            });
         }

         return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            updateProduct,
         });
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });
      }
   },
   deleteProduct: async (req, res) => {
      try {
         const id = req.params.id;
         const conditionWhenDeleteProduct = {
            _id: id,
         };
         console.log(conditionWhenDeleteProduct);

         const deleteProduct = await Product.findOneAndRemove(
            conditionWhenDeleteProduct
         );
         if (!deleteProduct) {
            return res.status(404).json({
               success: false,
               message: "Product has deleted or cant searching item",
            });
         }
         return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            deleteProduct,
         });
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });
      }
   },
   filterProduct: async (req, res) => {
      try {
         //? basic filtering
         const objectId = { ...req.query };
         let excludedFields = ["sort", "page", "field", "limit"];
         excludedFields.forEach((element) => {
            delete objectId[element];
         });
         //? 2 advanced filtering
         let queryStr = JSON.stringify(objectId);
         queryStr = queryStr.replace(
            /\b(gte|gt|lte|lt)\b/g,
            (match) => `$${match}`
         );
         let items = await Product.find(JSON.parse(queryStr));

         //? 3 sorting
         if (req.query.sort) {
            console.log(req.query.sort);
            const sortBy = req.query.sort.split(",").join(" ");
            console.log(sortBy);
            items = await Product.find(JSON.parse(queryStr)).sort(sortBy);
         } else {
            items = await Product.find(JSON.parse(queryStr)).sort("rating");
         }

         //? pagination
         const page = Number(req.query.page);
         const limit = Number(req.query.limit);
         const skip = (page - 1) * limit;
         if (page && limit) {
            items = await Product.find({}).skip(skip).limit(limit);
         }
         return res.status(200).json({
            success: true,
            length: items.length,
            message: "get items successfully",
            items,
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
