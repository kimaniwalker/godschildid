import React from 'react'
import Router from 'next/router'

export default function Stripesetup({ user }) {
    

    const [errormsg, seterrormsg] = React.useState('')

    const handleStripe = async() => {
        let body = {
            customer_email: user.username
          }
          console.log(body)
      
          try {
            const res = await fetch('/api/payments/createsession', {
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

    return (
        <>
            <button onClick={handleStripe} className="btn btn-primary w-100">Stripe Signup</button>
        </>
    )
}
