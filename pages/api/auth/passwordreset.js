import { resetpassword, validatePassword } from "../../../lib/user"
import { findUser } from "../../../lib/user"

export default async function passwordreset(req, res) {
    try {

        let user = await findUser({ username: req.body.username })
        
        let password = req.body.password
        
        
        if (user && validatePassword(user, password)) {
            
            let results = await resetpassword({password: req.body.newpassword ,username: user.username})
            res.status(200).send({ results })

        } else {
            throw new Error('Invalid username and password combination')
        }

    } catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}
