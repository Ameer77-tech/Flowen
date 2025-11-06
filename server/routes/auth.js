import express from "express";
import { registerUser } from "../controllers/auth.controller.js";
const authRouter = express.Router();

authRouter.post("/register-user", registerUser);
// app.post("/verify-user", verifyUser)
// app.put("/logout-user", logoutUser)

export default authRouter;
