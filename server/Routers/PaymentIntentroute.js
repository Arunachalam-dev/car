// POST /api/stripe/pay
const express = require('express');
const router = express.Router();
require('dotenv').config(); // <-- Load .env variables

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/pay', async (req, res) => {
  const { amount, payment_method } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'  // prevents return_url requirement
      }
    });

    res.json({ success: true, paymentIntent });
  } catch (error) {
    console.error('Payment failed:', error.message);
    res.json({ success: false, error: error.message });
  }
});

module.exports = router;
