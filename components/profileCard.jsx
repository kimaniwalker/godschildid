import React from 'react'


export default function Profilecard(props) {


    return (
        <>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <div className="row justify-content-center align-items-center h-100 text-primary bg-light">
                        {props.image}
                        </div>

                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.body}</p>
                            <div className="w-100">{props.stripe}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
