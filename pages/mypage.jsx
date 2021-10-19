import React from 'react'
import Childcard from '../components/childcard'
import Layoutfull from '../components/layoutfull'
import { useUser } from '../lib/hooks'

export default function Mypage(props) {
    const user = useUser({ redirectTo: '/login' })
    const [children, setchildren] = React.useState([])
    const [errormsg, seterrormsg] = React.useState('')

    React.useEffect(() => {
        if (!user) {
            return;
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
                {children ? <div class="card-group">
                    <div className="row p-5 g-4 m-3">

                        {children.map((child => (
                            <div key={child.id} className="col-4">

                                <Childcard child={child} />

                            </div>
                        )))}


                    </div>
                </div>
                    : null}





            </Layoutfull>

        </>
    )




}
