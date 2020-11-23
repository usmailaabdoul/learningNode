const stripe = require('../../config/stripe');
const appConfig = require('../../app.config');

class StripeService {
  initiatePayment() {
    stripe.charges.retrieve('ch_1HjiAqAWoEa9eXNjeVoz9LO6', {
      api_key: appConfig.stripeApiKey
    });
  }

  async createCheckoutSession(data) {
    
    // data.map(())

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: [card],
      });

      return paymentIntent;
    } catch (error) {
      console.log(error);
    }
  }

  async createCharge() {
    try {
      const charge = await stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        source: 'tok_amex',
        description: 'My First Test Charge (created for API docs)',
      });

      return charge;
    } catch (error) {
      
    }
  }
}

const service = new StripeService();

module.exports = service;
