import React from 'react'
import styles from '../styles/css/homebanner2.module.css'
import Form from './form'

export default function Homebanner2(props) {


    return (
        <>
            <div id={styles.bannercontainer} className="container-fluid p-0 m-0 bg-secondary">
                <div className="row p-5">
                    <div className="col-6 align-items-center">

                        <div className="row text-center">
                            <h3>For Information Or Instructions, Play Video</h3>
                        </div>

                        <div className="row justify-content-end p-5 d-flex">

                            <iframe width="75%" height="300" src="https://www.youtube.com/embed/SY7RhBszp0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>




                    </div>
                    <div className="col-6">

                        <div className="row p-5">
                            <h3 className="py-2 text-primary2">Sign Up Or Login</h3>
                            <Form />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
