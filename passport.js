const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID ="445212295053-add4irdg4jfl33kfihcltm2aguaqevs5.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET ="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";
const passport = require("passport");

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));


passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });