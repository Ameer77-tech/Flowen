import express from "express";
const taskRouter = express.Router();
import { decodeToken } from "../lib/jwt.js";

taskRouter.use(decodeToken);

taskRouter.get("/", (req, res) => {
  res.send("HI");
});

export default taskRouter;
