const router = require('express').Router();


router.route('/signup')
    .post((req, res) => {
        console.log("im hit")
    });

module.exports = router;