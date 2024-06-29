import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "All fields are mandatory!"],
      unique: [true, "Username must be unique"],
    },
    email: {
      type: String,
      required: [true, "All fields are mandatory!"],
      unique: [true, "email must be unique"],
    },
    password: {
      type: String,
      required: [true, "All fields are mandatory!"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
