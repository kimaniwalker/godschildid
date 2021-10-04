const stripe = require('stripe')(process.env.STRIPESKTST);
const YOUR_DOMAIN = 'http://localhost:3000';

export default async function Createsession(req, res) {
    try {
        const session = await stripe.checkout.sessions.create({
            success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}/profile`,
            customer_email: req.body.customer_email,
            allow_promotion_codes: true,
            payment_method_types: ['card'],
            line_items: [
              {price: 'price_1JfdQbDpTp0gd1N8Z5DERevK', quantity: 1},
              {price: 'price_1JfbSVDpTp0gd1N80afI8BdM', quantity: 1},
            ],
            mode: 'subscription',
          });

          res.status(200).json({url: session.url})
    } catch {
        console.error(error)
        res.status(500).end(error.message)
    }
}
