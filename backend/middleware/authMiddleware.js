const jwt = require("jsonwebtoken"); // to decode the token
const User = require("../models/User"); // make sure the path is correct

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password"); // exclude password
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      res.status(401).json({ message: "Not Authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

//check if the user is an admin
const admin =async(req,res,next)=>{
    if(req.user && req.user.role==="admin"){
        next();
    }
    else{
        res.status(403).json({message:"No authorized as an admin"});
    }
};

module.exports = { protect,admin };
