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

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env["GITHUB_CLIENT_ID"],
      clientSecret: process.env["GITHUB_CLIENT_SECRET"],
      callbackURL: process.env["callBackUrl_GITHUB"],
      scope: ["profile", "email"],
      prompt: "select_account consent",
    },
    async (accessToken, refreshToken, profile, done) => {

      if (!profile) {
        return done(null, false);
      }
      var user = {
        userName: profile.username,
        githubId: profile.id,
        displayName: profile.displayName || profile.userName,
        avatar: profile.photos[0].value,
        provider: profile.provider,
      };

      try {
        const userInDb = await userModel.findOne({ githubId: user.githubId });
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
            { githubId: user.githubId },
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
  id: '208180357',
  nodeId: 'U_kgDODGiUhQ',
  displayName: null,
  username: 'Ameer77-tech',
  profileUrl: 'https://github.com/Ameer77-tech',
  photos: [
    { value: 'https://avatars.githubusercontent.com/u/208180357?v=4' }
  ],
  provider: 'github',
  _raw: '{"login":"Ameer77-tech","id":208180357,"node_id":"U_kgDODGiUhQ","avatar_url":"https://avatars.githubusercontent.com/u/208180357?v=4","gravatar_id":"","url":"https://api.github.com/users/Ameer77-tech","html_url":"https://github.com/Ameer77-tech","followers_url":"https://api.github.com/users/Ameer77-tech/followers","following_url":"https://api.github.com/users/Ameer77-tech/following{/other_user}","gists_url":"https://api.github.com/users/Ameer77-tech/gists{/gist_id}","starred_url":"https://api.github.com/users/Ameer77-tech/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Ameer77-tech/subscriptions","organizations_url":"https://api.github.com/users/Ameer77-tech/orgs","repos_url":"https://api.github.com/users/Ameer77-tech/repos","events_url":"https://api.github.com/users/Ameer77-tech/events{/privacy}","received_events_url":"https://api.github.com/users/Ameer77-tech/received_events","type":"User","user_view_type":"public","site_admin":false,"name":null,"company":null,"blog":"","location":null,"email":null,"hireable":null,"bio":null,"twitter_username":null,"notification_email":null,"public_repos":8,"public_gists":0,"followers":3,"following":6,"created_at":"2025-04-18T15:59:55Z","updated_at":"2025-10-12T03:47:13Z"}',
  _json: {
    login: 'Ameer77-tech',
    id: 208180357,
    node_id: 'U_kgDODGiUhQ',
    avatar_url: 'https://avatars.githubusercontent.com/u/208180357?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Ameer77-tech',
    html_url: 'https://github.com/Ameer77-tech',
    followers_url: 'https://api.github.com/users/Ameer77-tech/followers',
    following_url: 'https://api.github.com/users/Ameer77-tech/following{/other_user}',
    gists_url: 'https://api.github.com/users/Ameer77-tech/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Ameer77-tech/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Ameer77-tech/subscriptions',
    organizations_url: 'https://api.github.com/users/Ameer77-tech/orgs',
    repos_url: 'https://api.github.com/users/Ameer77-tech/repos',
    events_url: 'https://api.github.com/users/Ameer77-tech/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Ameer77-tech/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false,
    name: null,
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    notification_email: null,
    public_repos: 8,
    public_gists: 0,
    followers: 3,
    following: 6,
    created_at: '2025-04-18T15:59:55Z',
    updated_at: '2025-10-12T03:47:13Z'
  }
}
file:///G:/Projects/web%20projects/xTask/server/lib/passport.js:79
        userName: profile.name.givenName,
                    */