import { User } from "../model/userModel.js"

export const getAllusers = async(req, res) => {
  const user = await User.find(); 
  res.status(201).json({
    data: user,
  });
};
