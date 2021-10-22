import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import styles from '../styles/css/header.module.css'

export default function Topheader(props) {


    return (
        <>
            <div id={styles.header} className="d-flex justify-content-center py-3"><Image src={logo} width={400} height={100} /></div>

        </>
    )
}
