const jwt = require("jsonwebtoken");

// user authorization
const isAuth = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];

    if (token) {
      let decode = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decode;
      return next();
    } else {
      return res.status(400).json({ message: "token not recieved" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = { isAuth };
