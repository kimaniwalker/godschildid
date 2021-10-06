
const stripe = require('stripe')(process.env.STRIPESKTST);

export default async function Customerinfo(req, res) {
    
    try {
        const customer = await stripe.customers.retrieve(
            req.body.customer_id, {
              expand: ['subscriptions'],
            }
          );
        res.status(200).send({customer}) 
    } catch (error) {
       console.log(error)
       res.status(500).send(error)
    }

   

}
