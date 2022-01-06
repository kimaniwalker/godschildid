import React from 'react'
import { useAppContext } from '../lib/context/userstate'
import Form from './form'
import Router from 'next/router'

export default function Homebanner2(props) {

    const user = useAppContext()
    const [errorMsg, setErrorMsg] = React.useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        if (errorMsg) setErrorMsg('')

        const body = {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
        }

        if (body.password !== e.currentTarget.rpassword.value) {
            setErrorMsg(`The passwords don't match`)
            return
        }

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                Router.push('/login')
            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setErrorMsg(error.message)
        }
    }


    return (
        <>

            <div className="row p-5">
                <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12 align-items-center">

                    <div className="row text-center">
                        <h3 className='py-2'>Introductory Video</h3>
                        <iframe src="https://player.vimeo.com/video/655122687?h=9f378da97b" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                    </div>




                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12 align-items-center">

                    <div className="row mb-4 mx-5">
                        {user.user ? null : <><div className="row py-2 mb-4">
                            <h3 className="text-secondary">Sign Up Or Login</h3>
                        </div><Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} /></>}
                    </div>


                </div>
            </div>



        </>
    )
}
