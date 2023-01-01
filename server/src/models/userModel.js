const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      username: {
         type: String,
         unique: true,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      email: {
         type: String,
      },
      admin: {
         type: Boolean,
         default: false,
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("user", userSchema);
