import { updateUser } from "../../../lib/user";

export default async function Updateuser(props) {



    try {

        let results = await updateUser({ user: req.body, id: req.body.id })
        res.status(200).send({ results })


    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }





}
