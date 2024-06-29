import { User } from "../model/userModel.js";
import asyncHandler from "express-async-handler";

export const signUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userEmailAvailable = await User.findOne({ email });
  if (userEmailAvailable) {
    res.status(400);
    throw new Error("User email already exists!");
  }

  const userUsernameAvailable = await User.findOne({ username });
  if(userUsernameAvailable){
    res.status(400);
    throw new Error("Username already exists!");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  res.status(201).json({
    data: user,
  });
});
