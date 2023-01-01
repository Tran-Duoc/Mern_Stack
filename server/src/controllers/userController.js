const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
   register: async (req, res) => {
      try {
         const { username, password } = req.body;
         if (!username || !password) {
            return res.status(403).json({
               success: false,
               message: "require  username or password",
            });
         }
         const user = await User.findOne({ username });
         if (user) {
            return res.status(401).json({
               success: false,
               message: "User already registered",
            });
         }

         const salt = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hash(password, salt);

         const newUser = new User({
            username: username,
            password: hashPassword,
         });
         await newUser.save();

         const accessToken = await jwt.sign(
            { userId: newUser._id },
            process.env.ACCESS_TOKEN_SECRET
         );

         return res.status(200).json({
            success: true,
            message: "User saved successfully",
            newUser,
            accessToken,
         });
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });
      }
   },
   login: async (req, res) => {
      try {
         const { username, password } = req.body;
         if (!username || !password) {
            return res.status(401).json({
               success: false,
               message: "Missing  username or password",
            });
         }
         const user = await User.findOne({ username: username });
         if (!user) {
            return res.status(403).json({
               success: false,
               message: "Invalid username",
            });
         }

         const passwordCheck = await bcrypt.compare(password, user.password);
         if (!passwordCheck) {
            return res.status(403).json({
               success: false,
               message: "Invalid password",
            });
         }
         const accessToken = await jwt.sign(
            { userId: user._id },
            process.env.ACCESS_TOKEN_SECRET
         );
         return res.status(200).json({
            success: true,
            message: "Login is successfully",
            user,
            accessToken,
         });
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message,
         });
      }
   },
};

module.exports = userController;
