import { createContext, useContext } from 'react';
import { useUser } from '../hooks';
import React from 'react';
import { Codes } from '../../data/codes';

const UserContext = createContext();

export function UserWrapper({ children }) {
    const [status, setStatus] = React.useState('')
    const [isActive, setIsActive] = React.useState(false)

    let user = useUser()
    let userobject = {
        user,
        status,
        isActive
    }


    React.useEffect(() => {
        if (user && user.code) {
            let codeIsValid = Codes.includes(user.code)
            setIsActive(codeIsValid)
        }
    }, [user])


    return (
        <UserContext.Provider value={{ user, userobject, isActive }}>
            {children}
        </UserContext.Provider>
    );
}

export function useAppContext() {
    return useContext(UserContext);
}