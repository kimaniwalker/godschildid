import { sendtextcode } from "../../../lib/contact"

export default async function Sendtext(req, res) {

    try {
        let sid = await sendtextcode(req.body)
        console.log(sid)

        res.status(200).send({ sid })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error })
    }



}
