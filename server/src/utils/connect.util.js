const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGOOSE_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log("Connected to Mongoose");
   } catch (error) {
      console.log({
         error: error.message,
      });
      process.exit(1);
   }
};

module.exports = connectDB;
