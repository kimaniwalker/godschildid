import React from 'react'
import Addchild from '../../components/addchild'
import { useUser } from '../../lib/hooks'

export default function Createchild(props) {
    const user = useUser({ redirectTo: '/login' })


    return (
        <>
            <Addchild user={user} />
        </>
    )
}
