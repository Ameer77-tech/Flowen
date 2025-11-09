import express from "express";
import { decodeToken } from "../lib/jwt.js";
const projectRouter = express.Router();

projectRouter.use(decodeToken);

export default projectRouter;
