import React from 'react'
import { useUser } from '../lib/hooks'
import Layout from './layout'
import Router from 'next/router'

export default function Success({ session }) {

    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const user = useUser({ redirectTo: '/login' })


    const handleSubmit = async (e) => {

        e.preventDefault()

        let sessionbody = {
            customer_id: session.session.customer.id,
            phone,
            id: user.id
        }
        console.log(sessionbody)

        try {
            const res = await fetch(`/api/payments/savecustomerid`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sessionbody),
            })
            if (res.status === 200) {
                const results = await res.json()
                console.log(results)
                Router.push('/profile')

            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)

        }

    }

    return (
        <>
            <Layout>
                <div className="row justify-content-center">
                    <h2>Almost Finished</h2>
                </div>
                <div className="row">
                    <p>Enter your phone number and address to complete your registration. Once you have entered the required details , please hit submit to finish.</p>
                </div>







                <form onSubmit={handleSubmit}>

                    <div class="form-group my-2">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input onChange={(e) => setPhone(e.target.value)} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="form-group my-2">
                        <label for="exampleInputPassword1">Address</label>
                        <input onChange={(e) => setAddress(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>


                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </form>


            </Layout>
        </>
    )
}
