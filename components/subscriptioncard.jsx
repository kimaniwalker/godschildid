import React from 'react'

export default function Subscriptioncard(props) {


    return (
        <>
            <div class="card text-center">
                <div class="card-header py-2">
                    {props.title}
                </div>
                <div class="card-body py-4">
                    <h2 class="card-title py-4">{props.price}</h2>
                    <p class="card-text py-2">{props.detail}</p>
                    <a href="#" class="btn btn-primary w-100 mt-4">{props.button}</a>
                </div>

            </div>
        </>
    )
}
