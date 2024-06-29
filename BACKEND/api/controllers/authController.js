export const signUp = (req, res) => {
  const { username, email, password } = req.body;
  res.json({
    data: {
      username,
      email,
      password,
    },
  });
};
