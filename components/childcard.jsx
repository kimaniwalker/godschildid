import React from 'react'
import Childcardedit from './childcardedit'
import Router from 'next/router'
import Link from 'next/link'


export default function Childcard({ child, flier }) {

    const [first, setFirst] = React.useState('')
    const [last, setLast] = React.useState('')
    const [info, setInfo] = React.useState('')
    const [edit, setEdit] = React.useState(true)





    return (
        <>
            <div class="card h-100">
                {flier ?
                    <div class="card-header text-white bg-primary text-center">
                        <h1>Missing Child</h1>
                    </div>
                    :
                    null}


                <div class="card-body">
                    <div className="row">
                        <div className="col-5">
                            <img src={child.image} class="card-img" alt="profile pic" />
                        </div>
                        <div className="col-7">
                            <div className="card-title">


                                {edit ? <>
                                    {flier ? <><div class="mb-3">
                                        <label for="first" class="form-label">First Name</label>
                                        <input onChange={(e) => setFirst(e.target.value)} type="text" class="form-control" id="first" />
                                    </div>
                                        <div class="mb-3">
                                            <label for="last" class="form-label">Last Name</label>
                                            <input onChange={(e) => setLast(e.target.value)} type="text" class="form-control" id="last" />
                                        </div>
                                    </> : null}
                                </> : <>
                                    {flier ? <><div class="mb-3">
                                        <h3>{first} {last}</h3>
                                    </div>

                                    </> : null}
                                </>}




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
                    <div className="row">
                        <div class="mb-3">
                            <label for="Height" class="form-label">Additional Information:</label>
                            <textarea onChange={(e) => setInfo(e.target.value)} type="text" class="form-control" cols="20" id="Height" />
                        </div>
                    </div>

                </div>




                {flier ?
                    <div className="card-footer bg-primary">
                        <div className="row text-center text-secondary">
                            <p>Contact Your Local Authorities If You Have Any Information</p>
                        </div>

                    </div> :
                    <div className="card-footer bg-primary">
                        <div className="row text-center text-secondary">
                            <div className="col-4">
                                <Link href={`/children/${child.id}`}>
                                    <a className="text-secondary">Browse</a>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link href={`/children/${child.id}`}>
                                    <a className="text-secondary">Flier</a>
                                </Link>
                            </div>
                            <div className="col-4">

                                <Link href={`/children/${child.id}`}>
                                    <a className="text-secondary">Edit</a>
                                </Link>

                            </div>
                        </div>

                    </div>}

            </div>
        </>
    )
}
