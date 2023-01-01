const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const connectDB = require("./utils/connect.util");

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/products", productRouter);
const runServer = async () => {
   await connectDB();
   const port = process.env.PORT || 4000;
   app.listen(port, () => {
      console.log(`server is running at ${port}`);
   });
};

runServer();
