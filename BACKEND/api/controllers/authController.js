import { User } from "../model/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
  console.log("Hashed password: ", hashPassword);

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

export const signIn = asyncHandler(async (req, res) => {
  /**Fetch the email and password from form */
  const { email, password } = req.body;
  /** Check if user exits in database*/
  const validUser = await User.findOne({ email });

  /**User not found */
  if (!validUser) {
    res.status(404);
    throw new Error("User not found!");
  }

  /**Validate password*/
  const validPassword = await bcrypt.compare(password, validUser.password);

  /**Wrong credentials */
  if (!validPassword) {
    res.status(401);
    throw new Error("Invalid Credentials!");
  }

  /**Create a token */
  const token = jwt.sign({ id: validUser._id }, process.env.ACCESS_TOKEN);
  /**destructure user and remove password from result */
  const { password: hashPassword, ...rest } = validUser._doc;
  /**Add token to cookie */
  res.cookie("access_token", token, { httpOnly: true }).status(200).json({
    data: rest,
  });
});
