import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Form from '../components/form'
import { toast } from 'react-toastify';

const Signup = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')
  const [username, setUsername] = useState('')
  const success = () => toast.success("Success");

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match or is not at least 8 charachters`)
      return
    }



    try {
      setUsername(e.currentTarget.username.value)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        success()




        Router.push("/login")

      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }



  return (


    <Layout title='Signup'>

      <div className="login">
        <Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} />
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

export default Signup
