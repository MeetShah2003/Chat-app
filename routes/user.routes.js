const { Router } = require("express");
const { signUp } = require("../controller/user.controller");
const { singleUpload } = require("../middleware/multer");
const userRoute = Router();

userRoute.post("/signup", singleUpload, signUp);

userRoute.post("/login");

module.exports = { userRoute };
