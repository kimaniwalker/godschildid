const stripe = require('stripe')(process.env.STRIPESKTST);
const DOMAIN = 'https://www.godschildid.com';
const TEST_DOMAIN = 'http://localhost:3000/'

export default async function Createsession(req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}/profile`,
      customer_email: req.body.customer_email,
      allow_promotion_codes: true,
      payment_method_types: ['card'],
      line_items: req.body.line_items,
      mode: 'subscription',
    });

    res.status(200).json({ url: session.url })
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}
