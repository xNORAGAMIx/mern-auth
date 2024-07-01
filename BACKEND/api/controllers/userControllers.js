import { User } from "../model/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

export const getAllusers = async (req, res) => {
  const user = await User.find();
  res.status(201).json({
    data: user,
  });
};

export const updateUser = asyncHandler(async(req, res) => {
  if (req.user.id !== req.params.id) {
    res.status(401);
    throw new Error("You can only update your account!");
  }

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.profilePicture,
      },
    },
    {
      new: true,
    }
  );
  const { password, ...rest } = updatedUser._doc;
  res.status(200).json({
    data: rest,
  });
});
