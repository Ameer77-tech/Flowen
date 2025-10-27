import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/dbConn.js";

dotenv.config();
await connectDB();

const app = express();
const PORT = process.env.PORT;
const frontend = process.env.CLIENT_URL;
app.use(
  cors({
    origin: [frontend],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
