import { getmykids } from "../../../lib/children";


export default async function Mykids(req, res) {


    try {
        let mykids = await getmykids({ parentid: req.body.parentid })
        res.status(200).send({ mykids })
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }


}
