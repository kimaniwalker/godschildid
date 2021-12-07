import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Form from '../components/form'

const Login = () => {
  useUser({ redirectTo: '/profile', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')
  const [usersession, setuserSession] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        const userSession = await res.json()
        setuserSession(userSession)

        if (!userSession.user.auth) {
          console.log('User Does Not Have 2FA Enabled Give Them A Cookie')
          console.log(userSession.user.auth)
          Router.push('/profile')
        } else {
          console.log('User has 2FA Enabled')
          Router.push(`/verifytoken?username=${userSession.user.username}`)
        }



      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <Layout title='Login'>
      <div className="login">
        <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  )
}

export default Login
