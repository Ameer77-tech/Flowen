import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
      callbackURL: process.env["callBackUrl_GOOGLE"],
      scope: ["profile", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
      if (!profile) {
        return done(null, false);
      }
      return done(null, profile);
    }
  )
);
