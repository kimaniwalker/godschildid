import passport from 'passport'
import nextConnect from 'next-connect'
import { localStrategy } from '../../../lib/password-local'
import { setLoginSession } from '../../../lib/auth'
import { generatecode } from '../../../lib/twofactorauth'
import { sendtextcode, sendEmail } from '../../../lib/contact'
import { updateUser } from '../../../lib/user'


const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })

passport.use(localStrategy)

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      const user = await authenticate('local', req, res)
      // session is the payload to save in the token, it may contain basic info about the user
      const session = { ...user }

      if (!user.auth) {
        await setLoginSession(res, session)
        res.status(200).send({ user, session })
      } else if (user.auth === 'email') {

        let code = await generatecode(100000, 999999)
        console.log(code)

        let secret = { secret: code }
        console.log(secret)

        let results = await updateUser({ user: secret, id: user.id })
        console.log(results)

        let messageresults = await sendEmail({ to: 'admin@key2design.io', subject: 'Your 2FA Authorization Code', content: code })
        console.log(messageresults)

        res.status(200).send({ user: user, session: session })

      } else if (user.auth === 'phone') {
        let code = await generatecode(100000, 999999)
        let secret = { secret: code }
        console.log(secret)

        let results = await updateUser({ user: secret, id: user.id })
        console.log(results)


        let sid = await sendtextcode({ message: 'Your secret code is' + code, phone: user.phone })
        console.log(sid)

        res.status(200).send({ user: user, session: session })



      } else {
        throw new Error('Invalid Auth Method')
      }

    } catch (error) {
      console.error(error)
      res.status(401).send(error.message)
    }
  })
