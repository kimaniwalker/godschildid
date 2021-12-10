import { sendEmail, sendWelcomeEmail } from "../../../lib/contact"

export default async function SendWelcome(req, res) {

    try {
        let messageresults = await sendWelcomeEmail(req.body)
        console.log(messageresults)

        res.status(200).send({ messageresults })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error })
    }


}

