import express from "express";
import User from "../models/userModel.js";
import userAuth from "../middlewares/userAuth.js";

const router = express.Router();

router.post("/auth/signup", async (req, res) => {
  const isExistingUser = await User.findOne({ email: req.body.email });
  console.log("isExising user", isExistingUser);
  if (isExistingUser) {
    return res.status(409).send({
      success: false,
      message: "User already existed",
    });
  }
  const user = new User(req.body);
  await user.validate();
  user.password = await user.hashPassword(req.body.password);
  const response = await user.save();
  res.status(201).send({
    success: true,
    message: "User created successfully",
    user: {
      id: response._id,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
    },
  });
});

router.post("/auth/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(401).send({
      success: false,
      message: "Invalid Credentials",
    });

  const isValidPassword = await user.checkPassword(req.body.password);
  if (!isValidPassword)
    res.status(401).send({
      success: false,
      message: "Invalid Credentials!!!",
    });
  res.cookie("loginToken", user.generateJWTtoken());
  res.send({
    success: true,
    message: "login successful",
    userResponse: {
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
    },
  });
});

router.post("/auth/logout", (req, res) => {
  res.clearCookie("loginToken");
  res.send({
    success: true,
    message: "logout successful",
  });
});

router.get("/auth/profile", userAuth, async (req, res) => {
  const user = await User.findOne({ _id: req.user.id }).select("-password");
  if (!user) {
    return res.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  res.send({
    success: true,
    message: "Fetched profile successfully",
    user,
  });
});

router.patch("/auth/changePassword", userAuth, async (req, res) => {
  const { password } = req.body;
  const user = await User.findById(req.user.id);
  const hash = await user.hashPassword(password);
  user.password = hash;
  await user.save();
  res.send({ message: "password updated successfully" });
});

router.patch("/auth/update", userAuth, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  }).select(Object.keys(req.body).join(" "));
  res
    .status(200)
    .send({ success: true, message: "Updated successfully", user });
});

export default router;
