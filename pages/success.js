import React from 'react'
import { useUser } from '../lib/hooks'
import { useRouter } from 'next/router'

export default function Success() {

    const [session, setsession] = React.useState([])
    const user = useUser({ redirectTo: '/login' })
    const router = useRouter()
    const sessionid = router.query.session_id
   

    React.useEffect(() => {
        if(!sessionid) {
            return;
        } else {
           getsession() 
        }
        

    }, [sessionid])

    

    const getsession = async () => {

        let body = {
            sessionid: sessionid
        }



        try {
            const res = await fetch(`/api/payments/getsession`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session)
                setsession(session)
                

                let sessionbody = {
                    customer_id: session.session.customer.id,
                    id: user.id
                }
                console.log(body)
        
                try {
                    const res = await fetch(`/api/payments/savecustomerid`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(sessionbody),
                    })
                    if (res.status === 200) {
                        const results = await res.json()
                        console.log(results)
        
                    } else {
                        throw new Error(await res.text())
                    }
                } catch (error) {
                    console.error('An unexpected error happened occurred:', error)
        
                }
               

            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)

        }
    }

   




    return (
        <>
            <div>Testing</div>
            
            
        </>
    )
}

