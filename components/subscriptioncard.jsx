import React from 'react'

export default function Subscriptioncard(props) {



    return (
        <>
            <div className="card-group">
                <div className="card text-center">
                    <div className="card-header py-2">
                        {props.title}
                    </div>
                    <div className="card-body py-4">
                        <h2 className="card-title py-4">{props.price}</h2>
                        <p className="card-text py-2">{props.detail}</p>
                        {props.button ? <a href="#" className="btn btn-primary w-100 mt-4">{props.button}</a> : <a href="/signup" className="btn btn-primary w-100 mt-4">Signup</a>}

                    </div>

                </div>
            </div>

        </>
    )
}
