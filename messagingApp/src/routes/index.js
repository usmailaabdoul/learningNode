const router = require('express').Router();

const baseApi = '/api/v1';

router.use(baseApi, require('./messages'))
module.exports = router;