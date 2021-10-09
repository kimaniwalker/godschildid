import React from 'react'

export default function Childcard({ child }) {


    return (
        <>
            <div class="card h-100">

                <div class="card-body">
                    <div className="row">
                        <div className="col-5">
                            <img src={child.image} class="card-img" alt="profile pic" />
                        </div>
                        <div className="col-7">
                            <div className="card-title">
                                <h4>{child.first_name} {child.last_name}</h4>
                                <p>Age: {child.age}</p>
                                <p>Gender: {child.gender}</p>
                                <p>D.O.B: {child.dob.slice(0, 10)}</p>


                            </div>
                        </div>





                    </div>

                    <div className="row pt-2">
                        <div className="col-6">
                            <p>Height: {child.height}</p>
                            <p>Weight: {child.weight}</p>



                        </div>
                        <div className="col-6">
                            <p>Hair Color: {child.hair}</p>
                            <p>Eye Color: {child.eyes}</p>



                        </div>
                    </div>
                    <div className="row">
                        <p>Medical Conditions: {child.medical_conditions}</p>
                        <p>Identifying Marks: {child.marks}</p>
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
