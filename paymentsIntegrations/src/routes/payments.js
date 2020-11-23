const router = require('express').Router();
const HttpStatus = require('http-status-codes');
const StripeService = require('../services/stripe');

router.post('/stripe/create-checkout-session', async (req, res, next) => {
  try {
    let res = await StripeService.createCheckoutSession(req.body);

    let client_secret = res.client_secret;

    return res.status(HttpStatus.StatusCodes.OK).json(client_secret);
  } catch (e) {
    return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json('Unable to initiate payment') 
  }
})

router.post('/paypal', async (req, res, next) => {

})

module.exports = router;
