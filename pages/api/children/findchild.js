import { getOne } from "../../../lib/children";


export default async function findchild(req, res) {

    try {

        let results = await getOne({ id: req.body.id })
        res.status(200).send({ results })


    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }



}
