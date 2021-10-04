const stripe = require('stripe')(process.env.STRIPESKTST);
const YOUR_DOMAIN = 'http://localhost:3000';

export default async function Customerportal(req, res) {
    try {
        const session = await stripe.billingPortal.sessions.create({
            customer: req.body.customer_id,
            return_url: YOUR_DOMAIN,
          });
        res.json({url: session.url});
    } catch(error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}
