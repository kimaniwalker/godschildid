import { findUser } from "../../../lib/user";
import { setLoginSession } from "../../../lib/auth";


export default async function Twofactorverify(req, res) {
    
  
    try {
        let user = await findUser({ username: req.body.username})
       
        if (user && user.secret === req.body.code) {
            const session = { ...user }
  
             await setLoginSession(res, session)
  
            res.status(200).send({ user, session })
        } else {
            throw new Error('Code is incorrect please try again')
        }
        
      } catch (error) {
        console.error(error)
        res.status(401).send(error.message)
      }


}
