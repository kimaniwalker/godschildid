import { sendEmail } from "../../../lib/contact"

export default async function Sendemail(req,res) {
    
    try {
        let messageresults = await sendEmail(req.body)
    console.log(messageresults)

    res.status(200).send({ messageresults })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error })
    }
    
    
}

