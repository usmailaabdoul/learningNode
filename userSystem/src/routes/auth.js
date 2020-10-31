const router = require('express').Router();
const HttpStatus = require('http-status-codes');
const UserService = require('../services/users');

router.post('/auth/register', async (req, res, next) => {
  try {
    let user = await UserService.createUser(req.body);
    return res.status(HttpStatus.StatusCodes.OK).json(user);
  } catch (e) {
    console.log(e);
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json(`${e}`)
  }
})

router.post('/auth/login', async (req, res, next) => {
  try {
    let user = await UserService.createUser(req.body);
    return res.status(HttpStatus.StatusCodes.OK).json(user);
  } catch (e) {
    console.log(e);
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json('Unable to create user')
  }
})

module.exports = router;