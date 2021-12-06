import React from 'react'


export default function Profilecard(props) {


    return (
        <>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="row justify-content-center align-items-center h-100 w-100 p-0 m-0 text-primary bg-light">
                            {props.image}
                        </div>

                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.body}</p>
                            <div className="w-100">{props.link}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
