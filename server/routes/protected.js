import express from "express";
import userModel from "../models/user.model.js";
import { decodeToken } from "../lib/jwt.js";
const protectedRouter = express.Router();

protectedRouter.use(decodeToken);

protectedRouter.get("/dashboard", async (req, res) => {
  const id = req.user.id;
  try {
    const user = await userModel.findOne({ _id: id });
    res.status(200).json({
      reply: {
        displayName: user.displayName,
        email: user.email,
        avatar: user.avatar,
      },
      success: true,
    });
  } catch (err) {
    res.status(500).json({ reply: "Internal Server Error", success: false });
  }
});

export default protectedRouter;
