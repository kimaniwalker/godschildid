import React from 'react'

export default function Childcard(props) {


    return (
        <>
            <div class="card w-50">

                <div class="card-body">
                    <div className="row">
                        <div className="col-5">
                            <img src={props.image} class="card-img" alt="profile pic" />
                        </div>
                        <div className="col-7">
                            <div className="card-title">
                                <h4>{props.first_name} {props.last_name}</h4>
                                <p>Age: {props.age}</p>
                                <p>Gender: {props.gender}</p>
                                <p>D.O.B: {props.dob}</p>


                            </div>
                        </div>





                    </div>

                    <div className="row pt-2">
                        <div className="col-6">
                            <p>Height: {props.height}</p>
                            <p>Weight: {props.weight}</p>



                        </div>
                        <div className="col-6">
                            <p>Hair Color: {props.hair}</p>
                            <p>Eye Color: {props.eyes}</p>



                        </div>
                    </div>
                    <div className="row">
                        <p>Medical Conditions: {props.medical_conditions}</p>
                        <p>Identifying Marks: {props.marks}</p>
                    </div>

                </div>
                <div className="card-footer bg-primary">
                    <div className="row text-center text-secondary">
                      <div className="col-4">
                    Browse
                </div>
                <div className="col-4">
                    Flier
                </div>
                <div className="col-4">
                    Edit
                </div>  
                    </div>
                
                </div>
            </div>
        </>
    )
}
