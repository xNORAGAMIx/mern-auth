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
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
