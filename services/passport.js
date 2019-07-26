const passport = require('passport');
const User = require('../models/User');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
// Create local strategy(for each 3rd party login system)

// By default when you try yo login a user using local 
// strategy it is expecting auser name and a password

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async(email, password, done) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return done(null, false)
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) return done(err)
            if (!isMatch) {
                return done(null, false);
            }
            return done(null, user)
        })
    } catch (e) {
        done(e, false)
    }
});

// Setup options for Jwt strategy (web Tokens)
// We need to tell our strategy where to look for the token

const jwtOptions = {
    // tells jwt strategy that whenever a req cpomes in
    // and we want to pass[port to handl it
    // It needs to look in the header, fot the property called 'authorization'
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    // tells jwt strategy what secret we used to encode the token 
    // so that it ccan decode it
    secretOrKey: config.secrect
}

passport.use(localLogin)