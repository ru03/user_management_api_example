const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const extractStrategy = require('passport-jwt').ExtractJwt;
const env = require('../../config/env');

const opts = {
  jwtFromRequest: extractStrategy.fromAuthHeaderAsBearerToken(),
  secretOrKey: env.jwt.secret,
}
passport.use('jwt', new JwtStrategy(opts, (token, done) => {
  try {
    return done(null, token.id);
  } catch (error) {
    done(error);
  }
}));
