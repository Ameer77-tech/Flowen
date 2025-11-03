import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "../config/dbConn.js";
import passport from "passport";
import googleAuthRouter from "../routes/auth.google.js";
import "../lib/passport.js";
import cookieParser from "cookie-parser";
import userModel from "../models/user.model.js";
import { decodeToken } from "../lib/jwt.js";

await connectDB();

const app = express();
const PORT = process.env.PORT;
const frontend = process.env.CLIENT_URL;

app.use(cookieParser());
app.use(
  cors({
    origin: [frontend],
  })
);
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth/google", googleAuthRouter);

app.get("/login", (req, res) => {
  res.send("<a href='http://localhost:3001/api/auth/google'>LOGIN</a>");
});

app.get("/", decodeToken, async (req, res) => {
  const id = req.user.id;
  try {
    const user = await userModel.findOne({ _id: id });
    res.send(`<h1>${user.displayName}</h1> <br> <p>${user.email}</p><br> <img style={{
      width : 50px;
      height : 50px
    }} src=${user.avatar} alt="avatar"/>`);
  } catch (err) {}
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
