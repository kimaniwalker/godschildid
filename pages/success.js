import React from 'react'
import { useRouter } from 'next/router'
import Success from '../components/success'


export default function SuccessPage() {

    const [session, setsession] = React.useState([])

    const router = useRouter()
    const sessionid = router.query.session_id


    React.useEffect(() => {
        if (!sessionid) {
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

                }
                console.log(sessionbody)


            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)

        }
    }






    return (
        <>
            <Success session={session} />


        </>
    )
}

