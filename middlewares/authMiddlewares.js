const passport = require('passport');
// By default passport wants to use cookies based authentication for the useer
// In our case we are using tokens so we set this behavior to false
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });
// configure any other strategies here
module.exports = {
    requireAuth,
    requireSignIn
};