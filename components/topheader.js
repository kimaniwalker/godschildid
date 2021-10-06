import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Topheader(props) {
    

    return (
        <>
        <div className="d-flex justify-content-center py-3"><Image src={logo} width={400} height={100} /></div>
            
        </>
    )
}
