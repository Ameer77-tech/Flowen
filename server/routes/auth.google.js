import express from "express";
import passport from "passport";


const googleAuthRouter = express.Router();

googleAuthRouter.get("/", passport.authenticate("google"));

export default googleAuthRouter;
