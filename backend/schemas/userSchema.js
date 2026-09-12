import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import process from "process";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minLength: [3, "First Name must contain atleast 3 characters"],
    maxLength: [50, "First Name must not contain more than 50 characters"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minLength: [3, "Last Name must contain atleast 3 characters"],
    maxLength: [50, "Last Name must not contain more than 50 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already existed"],
    trim: true,
    lowercase: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: "Email is invalid",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    validate: {
      validator: (password) => validator.isStrongPassword(password),
      message: "Password must be strong",
    },
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    lowercase: true,
    enum: {
      values: ["male", "female", "other"],
      message: "Gender must be male, female or other",
    },
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [10, "Age must be greater than or equal to 10"],
    max: [100, "Age must be less than or equal to 100"],
  },
});

userSchema.methods.hashPassword = async function (password) {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

userSchema.methods.checkPassword = async function (hashPassword) {
  const isValidPassword = await bcrypt.compare(hashPassword, this.password);
  return isValidPassword;
};

userSchema.methods.generateJWTtoken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

export default userSchema;
