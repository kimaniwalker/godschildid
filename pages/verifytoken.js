import React from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import AuthForm from '../components/authform'

export default function Verifytoken() {
  useUser({ redirectTo: '/', redirectIfFound: true })
  const router = useRouter()
  const [errorMsg, setErrorMsg] = React.useState('')


  const handleSubmit = async(e) => {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      code: e.currentTarget.authcode.value,
      username: router.query.username
    }

    try {
      const res = await fetch(`/api/auth/twofactorverify`, {
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
    <Layout>
      <div className="login">
        <AuthForm errorMessage={errorMsg} onSubmit={handleSubmit} />
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

