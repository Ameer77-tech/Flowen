import { generateToken } from "../lib/jwt.js";
import userModel from "../models/user.model.js";

export const registerUser = async (req, res) => {
  const data = req.body;
  if (!data) {
    return res
      .status(400)
      .json({ reply: "Fields Can't Be Empty", success: false });
  } else if (
    data.userName == "" ||
    data.displayName == "" ||
    data.password == ""
  ) {
    return res
      .status(400)
      .json({ reply: "All Fields Must be Filled", success: false });
  } else {
    const user = {
      userName: data.userName,
      displayName: data.displayName,
      password: data.password,
    };
    try {
      const created = await userModel.create(user);
      const token = generateToken(created._id);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      });
      return res.status(200).json({ reply: "User Created", success: true });
    } catch (err) {
      return res.status(500).json({ reply: "Server Error", success: false, err });
    }
  }
};
