const stripe = require('stripe')(process.env.STRIPESKLIVE);
const DOMAIN = 'https://www.godschildid.com';
const TEST_DOMAIN = 'http://localhost:3000/'

export default async function Customerportal(req, res) {
    try {
        const session = await stripe.billingPortal.sessions.create({
            customer: req.body.customer_id,
            return_url: DOMAIN,
        });
        res.json({ url: session.url });
    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}
