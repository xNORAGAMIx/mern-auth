import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  console.log(token);
  
  if (!token) {
    res.status(401);
    throw new Error("You need to login!");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      res.status(403);
      throw new Error("Token is not valid!");
    }
    req.user = user;
    next();
  });
};
