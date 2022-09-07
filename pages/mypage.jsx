import React from 'react'
import Childcard from '../components/childcard'
import Layoutfull from '../components/layoutfull'
import { useAppContext } from '../lib/context/userstate'
import { useUser } from '../lib/hooks'

export default function Mypage(props) {
    const user = useUser({ redirectTo: '/login' })
    const { isActive } = useAppContext()
    const [children, setchildren] = React.useState([])
    const [errormsg, seterrormsg] = React.useState('')

    React.useEffect(() => {
        if (!user) {
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
            <Layoutfull title='Childrens Page'>
                {isActive ? <>{children ? <div class="card-group">
                    <div className="row p-5 g-4 m-3">

                        {children.map((child => (
                            <div key={child.id} className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">

                                <Childcard child={child} />

                            </div>
                        )))}


                    </div>
                </div>
                    : null}</> : <><h2 className="text-center my-5 py-5">Your subscription is not active. Please navigate to your profile page for more information.</h2></>}


            </Layoutfull>

        </>
    )




}
