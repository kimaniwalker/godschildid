import { updateChild } from "../../../lib/children";


export default async function Updatechild(req, res) {

    try {

        let results = await updateChild({ child: req.body, id: req.body.id })
        res.status(200).send({ results })


    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }



}
