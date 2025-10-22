import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: ["http://localhost:3000"],
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
