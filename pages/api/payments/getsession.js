const stripe = require('stripe')(process.env.STRIPESKLIVE);


export default async function Getsession(req, res) {
    try {
        const session = await stripe.checkout.sessions.retrieve(
            req.body.sessionid, {
            expand: ['customer']
        }
        );
        res.status(200).json({ session })
    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}
