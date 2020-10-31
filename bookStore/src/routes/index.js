const router = require('express').Router();

const baseApi = '/api/v1';

router.use(baseApi, require('./books'));
router.use(baseApi, require('./genres'));
module.exports = router;