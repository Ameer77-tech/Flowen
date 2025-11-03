import express from "express";
import passport from "passport";

const googleAuthRouter = express.Router();

googleAuthRouter.get("/", passport.authenticate("google"));

googleAuthRouter.get(
  "/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const { user, token } = req.user;
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    res.redirect("http://localhost:3001/");
  }
);

export default googleAuthRouter;
