import { User } from "../model/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

export const signUp = asyncHandler(async (req, res) => {
  /** Destructuring the request body */
  const { username, email, password } = req.body;

  /**Checking if all fields are provided */
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  /**Checking uniquness of email */
  const userEmailAvailable = await User.findOne({ email });
  if (userEmailAvailable) {
    res.status(400);
    throw new Error("User email already exists!");
  }

  /**Checking uniquness of username */
  const userUsernameAvailable = await User.findOne({ username });
  if (userUsernameAvailable) {
    res.status(400);
    throw new Error("Username already exists!");
  }

  /**hashing user password */
  const hashPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password: ",hashPassword);

  /**Creating a document in collection users in DB */
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  res.status(201).json({
    data: user,
  });
});
