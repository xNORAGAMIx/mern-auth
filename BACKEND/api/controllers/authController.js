import { User } from "../model/userModel.js";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({
    username,
    email,
    password,
  });

  res.status(201).json({
    data: user
  });
};
