import React from 'react'
import Router from 'next/router'

export default function Stripebilling({ user }) {

    const [errormsg, seterrormsg] = React.useState('')

    const handleStripe = async () => {
        Router.push('/stripelanding')
    }




    const stripeBilling = async () => {
        let body = {
            customer_id: user.customer_id
        }

        try {
            const res = await fetch(`/api/payments/customerportal`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session)
                Router.push(session.url)

            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            seterrormsg(error.message)

        }
    }


    if (!user.customer_id) {
        return (
            <>
                <button className="btn btn-primary w-100" onClick={handleStripe}>Sign Up</button>
            </>)
    } else {
        return (
            <>
                <button className="btn btn-primary w-100" onClick={stripeBilling}>Manage My Subscription</button>
            </>
        )
    }


}
