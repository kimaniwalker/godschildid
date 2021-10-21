import React from 'react'
import Childcard from '../components/childcard'
import Layoutfull from '../components/layoutfull'
import { useAppContext } from '../lib/context/userstate'
import { useUser } from '../lib/hooks'

export default function Mypage(props) {
    const user = useUser({ redirectTo: '/login' })
    const status = useAppContext()
    const [children, setchildren] = React.useState([])
    const [errormsg, seterrormsg] = React.useState('')

    React.useEffect(() => {
        if (!user || !status.status === 'active') {
            return
        } else {
            getChildren()
        }

    }, [user])



    const getChildren = async () => {

        let body = {
            parentid: user.id
        }

        try {
            const res = await fetch(`/api/children/mykids`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session)
                setchildren(session.mykids)

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
            <Layoutfull>
                {status.status === 'active' ? <>{children ? <div class="card-group">
                    <div className="row p-5 g-4 m-3">

                        {children.map((child => (
                            <div key={child.id} className="col-4">

                                <Childcard child={child} />

                            </div>
                        )))}


                    </div>
                </div>
                    : null}</> : <><h2>Your subscription is not active. Please go to your profile page for more information</h2></>}






            </Layoutfull>

        </>
    )




}
