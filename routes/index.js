const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
// Setup APi routes. Prepends /api to al the routes cdeclaed in this file

router.use('/api', apiRoutes);

module.exports = router;