const bcrypt = require("bcrypt");
const getDataUri = require("datauri");
const cloudinary = require("cloudinary");
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/user.schema");

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const file = req.file;

    const fileUri = getDataUri(file);
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

    let newUser = await userModel.findOne({ email });

    if (!newUser) {
      bcrypt.hash(password, 7, async (err, hash) => {
        if (err) {
          return res.status(400).json({ message: err.message });
        } else {
          let newUser = await userModel.create({
            profilePic: myCloud.secure_url,
            firstName,
            lastName,
            email,
            password: hash,
          });
          return res
            .status(200)
            .json({ newUser, message: "user created sucessfully" });
        }
      });
    } else {
      return res.status(400).json({ message: "user already exist" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return res
        .status(200)
        .json({ token, message: "user logged in sucessfully" });
    } else {
      return res.status(400).json({ message: err.message });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = { signUp, login };
