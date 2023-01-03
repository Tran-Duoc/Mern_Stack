const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productModel = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         default: 0,
         min: [0, "deposit cannot be negative"],
      },
      where: {
         type: String,
         required: true,
         default: "any where",
      },
      image: {
         type: String,
      },
      description: {
         type: String,
      },
      rating: {
         type: Number,
      },
      user: {
         type: Schema.Types.ObjectId,
         ref: "user",
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("product", productModel);
