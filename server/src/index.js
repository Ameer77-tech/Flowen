import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "../config/dbConn.js";
import passport from "passport";
import googleAuthRouter from "../routes/auth.google.js";
import "../lib/passport.js";

await connectDB();

const app = express();
const PORT = process.env.PORT;
const frontend = process.env.CLIENT_URL;
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
  res.send(
    `<a href="http://localhost:3001/api/auth/google">LOGIN WITH GOOGLE</a>`
  );
});
app.get("/", (req, res) => {
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
