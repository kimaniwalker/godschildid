import React from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import ForgotPassword from '../components/forgotpassword'

export default function Forgotpassword() {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = React.useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      to: e.currentTarget.email.value,
      content: `<a href=\"https://www.godschildid.com/passwordreset?username=${e.currentTarget.email.value}\">Here is your super secret magical link to reset your password.</a>`,
      subject: 'Reset Your Password'

    }

    try {
      const res = await fetch(`/api/contact/sendemail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        const user = await res.json()
        console.log(user)
        Router.push('/')

      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <Layout title='Forgot Password'>
      <div className="login">
        <ForgotPassword errorMessage={errorMsg} onSubmit={handleSubmit} />
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

