import React from 'react'
import Layout from '../components/layout'
import Router from 'next/router'
import { useRouter } from 'next/router'

export default function Passwordreset(props) {

    const [username, setusername] = React.useState('')
    const [newpassword, setnewpassword] = React.useState('')
    const [confirmpassword, setconfirmpassword] = React.useState('')
    const [errmsg, seterrmsg] = React.useState('')
    const router = useRouter()

    const hanldeSubmit = async (e) => {
        e.preventDefault()

        try {
            let check = newpassword === confirmpassword
            if (check) {

                let body = {
                    username: router.query.username,
                    password: newpassword
                }

                const res = await fetch(`/api/auth/passwordreset`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
                if (res.status === 200) {
                    const results = await res.json()
                    console.log(results)
                    Router.push('/')

                } else {
                    throw new Error(await res.text())
                }


            } else {
                throw new Error('Passwords do not match')
            }


        } catch (error) {
            console.log(error)
            seterrmsg(error.message)
        }
    }

    return (
        <>
            <Layout title='Password Reset'>
                <form onSubmit={hanldeSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input disabled value={router.query.username} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={(e) => setnewpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div id="passwordHelpBlock" class="form-text mb-3">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input onChange={(e) => setconfirmpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    {!errmsg ? null : <div class="mb-3 text-danger">
                        {errmsg}
                    </div>}


                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Layout>

        </>
    )
}
