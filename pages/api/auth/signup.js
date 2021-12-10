import { sendWelcomeEmail } from '../../../lib/contact'
import { createUser } from '../../../lib/user'

export default async function signup(req, res) {
  try {
    let results = await createUser(req.body)
    if (results) {
      let body = {
        "to": req.body.username
      }
      sendWelcomeEmail(body)
    }
    res.status(200).send({ results })
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}
