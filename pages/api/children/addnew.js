import { addChild } from "../../../lib/children";

export default async function Addnew(req, res) {

    try {
        let result = await addChild({newchild: req.body})
        res.status(200).json(result)

    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }

}
