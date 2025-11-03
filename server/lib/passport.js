import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
dotenv.config();
import userModel from "../models/user.model.js";
import { generateToken } from "./jwt.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
      callbackURL: process.env["callBackUrl_GOOGLE"],
      scope: ["profile", "email"],
      prompt: "select_account consent",
    },
    async (accessToken, refreshToken, profile, done) => {
      if (!profile) {
        return done(null, false);
      }
      var user = {
        userName: profile.name.givenName,
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        provider: profile.provider,
      };
      console.log(user);

      try {
        const userInDb = await userModel.findOne({ googleId: user.googleId });
        if (!userInDb) {
          try {
            const created = await userModel.create(user);
            if (!created) {
              return done(new Error("User creation failed"));
            }
            const token = generateToken(created._id);
            return done(null, { user: created, token });
          } catch (err) {
            return done(err);
          }
        } else {
          const updatedUser = await userModel.findOneAndUpdate(
            { googleId: user.googleId },
            {
              lastLogin: new Date(),
            },
            { new: true }
          );
          const token = generateToken(updatedUser._id);
          return done(null, { user: updatedUser, token });
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

/* {
  id: '113036593626421984625',
  displayName: 'Ameer Shaik',
  name: { familyName: 'Shaik', givenName: 'Ameer' },
  emails: [ { value: 'ameershaik.cs@gmail.com', verified: true } ],
  photos: [
    {
      value: 'https://lh3.googleusercontent.com/a/ACg8ocKWQOqGHIZ4otXtyY3bHetP8l-P4IoZdsATWPFw9CxukadBHQ=s96-c'
    }
  ],
  provider: 'google',
  _raw: '{\n' +
    '  "sub": "113036593626421984625",\n' +
    '  "name": "Ameer Shaik",\n' +
    '  "given_name": "Ameer",\n' +
    '  "family_name": "Shaik",\n' +
    '  "picture": "https://lh3.googleusercontent.com/a/ACg8ocKWQOqGHIZ4otXtyY3bHetP8l-P4IoZdsATWPFw9CxukadBHQ\\u003ds96-c",\n' +
    '  "email": "ameershaik.cs@gmail.com",\n' +
    '  "email_verified": true\n' +
    '}',
  _json: {
    sub: '113036593626421984625',
    name: 'Ameer Shaik',
    given_name: 'Ameer',
    family_name: 'Shaik',
    picture: 'https://lh3.googleusercontent.com/a/ACg8ocKWQOqGHIZ4otXtyY3bHetP8l-P4IoZdsATWPFw9CxukadBHQ=s96-c',
    email: 'ameershaik.cs@gmail.com',
    email_verified: true
  }
} */
