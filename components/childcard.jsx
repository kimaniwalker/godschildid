import React from 'react'

export default function Childcard(props) {


    return (
        <>
            <div class="card" style={{ width: '18rem' }}>
                <img src={props.image} class="card-img-top" alt="profile pic" />
                <div class="card-body">
                    <div className="row">


                        <div className="card-title">
                            {props.first_name} {props.last_name}
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}
