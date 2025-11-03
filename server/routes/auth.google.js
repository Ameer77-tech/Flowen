import express from "express";
import passport from "passport";

const googleAuthRouter = express.Router();

googleAuthRouter.get("/", passport.authenticate("google"));
googleAuthRouter.get(
  "/callback",
  passport.authenticate("google", {
    session : false,
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

export default googleAuthRouter;
