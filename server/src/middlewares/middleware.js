const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
   try {
      const authHeader = req.header("Authorization");
      const token = authHeader && authHeader.split(" ")[1];

      if (!token) {
         return res.status(404).json({
            success: false,
            message: "Access token not found",
         });
      }
      const decode = await jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);
      req.userId = decode.userId;
      next();
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: error.message,
      });
   }
};

module.exports = verify;
