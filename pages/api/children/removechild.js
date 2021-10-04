import { removeChild } from "../../../lib/children";


export default async function removechild(req, res) {

    try {

        let results = await removeChild({ id: req.body.id })
        res.status(200).send({ results })


    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }



}
