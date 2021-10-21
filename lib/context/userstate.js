import { createContext, useContext } from 'react';
import { useUser } from '../hooks';
import React from 'react';

const UserContext = createContext();

export function UserWrapper({ children }) {
    const [status, setStatus] = React.useState('')
    let user = useUser()
    let userobject = {
        user,
        status
    }

    React.useEffect(() => {

        {
            user && user.customer_id ? getcustomerinfo() : null
        }

    }, [user])



    const getcustomerinfo = async () => {
        let body = {
            customer_id: user.customer_id
        }

        try {
            const res = await fetch(`/api/payments/customerinfo`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session)
                setStatus(session.customer.subscriptions.data[0].status)


            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)


        }
    }



    return (
        <UserContext.Provider value={userobject}>
            {children}
        </UserContext.Provider>
    );
}

export function useAppContext() {
    return useContext(UserContext);
}