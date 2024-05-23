const express = require("express");
const cloudinary = require("cloudinary");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.use("/api", userRoute);

app.listen(8090, () => {
  console.log("Server is running on port 8090");
  connection();
});
