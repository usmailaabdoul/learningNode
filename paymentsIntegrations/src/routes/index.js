const router = require('express').Router();

const baseApi = '/api/v1';

router.use(baseApi, require('./payments'))

module.exports = router;
