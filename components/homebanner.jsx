import React from 'react'
import styles from '../styles/css/hombanner.module.css'

export default function Homebanner(props) {


    return (
        <>
            <div id={styles.bannercontainer} className="container-fluid p-0 m-0 mt-3">
                <div className="row justify-content-center">

                    <div className="col-5">
                        <h2 id={styles.text} className="text-center text-white my-4 py-3">Vital Information About Your Children For You And Law Enforcenment Agencies</h2>
                    </div>
                </div>


            </div>
            <div id={styles.bottombanner} className="row bg-primary2">

            </div>
        </>
    )
}
