const db = require('../models');
const jwt = require('jwt-simple');
const config = require('../config');
const tokenForUser = function(user) {
    const timeStamp = new Date().getTime();

    // Sub === subject
    // iat === issued at time

    // its going to encode the whole first object and the add our secret to it
    return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret)
}

module.exports = {
    signUp: async(req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: 'You must provide an email and password' })
        }
        try {
            const existingUser = await db.User.findOne({ email })
            if (existingUser) {
                return res.status(422).joson({ error: 'Email is already in use' })
            }
            const user = new db.User({ email, password })
            await user.save();
            res.json({ token: tokenForUser(user) });
        } catch (e) {
            res.status(404).json({ e });
        }
    },
    signIn: (req, res) => {
        res.send('im hit')
    }
};