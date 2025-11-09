import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const token = jwt.sign({ id: payload }, "SECRET", {
    expiresIn: "7d",
  });
  return token;
};

export const decodeToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ reply: "Unauthorized", success: false });
  }
  const userId = jwt.verify(token, "SECRET");
  req.user = userId;

  next();
};
