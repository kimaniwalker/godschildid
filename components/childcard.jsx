import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Socialshare from './socialshare'
import Router from 'next/router'


export default function Childcard({ child, flier }) {

    const [first, setFirst] = React.useState('')
    const [last, setLast] = React.useState('')
    const [info, setInfo] = React.useState('')
    const [edit, setEdit] = React.useState(true)

    const router = useRouter()


    React.useEffect(() => {
        if (router.query.edit) {
            setEdit(false)

        } else {
            return
        }
    }, [router])

    const handleCreateFlier = async () => {
        Router.push(`/children/flier/${child.id}?first=${first}&last=${last}&edit=false&info=${info}`)
        // printDiv('printarea')

    }

    const printDiv = (divName) => {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
    }

    return (
        <>
            <div id="printarea" class="card h-100">

                {flier ?
                    <div class="card-header text-white bg-primary text-center">
                        <h2 className="text-white">Missing Child</h2>

                    </div>
                    :
                    null}


                <div class="card-body">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                            <img src={child.image} class="card-img" alt="profile pic" />
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
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
                                        <h3>{router.query.first} {router.query.last}</h3>
                                    </div>

                                    </> : null}
                                </>}




                                <p>Age: {child.age}</p>
                                <p>Gender: {child.gender}</p>
                                <p>D.O.B: {child.dob.slice(0, 10)}</p>
                                <p>Race: {child.race}</p>

                                {edit ? null : <Socialshare pathname={router.asPath} />}



                            </div>
                        </div>





                    </div>

                    <div className="row pt-2">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <p>Height: {child.height}</p>
                            <p>Weight: {child.weight}</p>



                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <p>Hair Color: {child.hair}</p>
                            <p>Eye Color: {child.eyes}</p>



                        </div>
                    </div>
                    <div className="row">
                        <p>Medical Conditions: {child.medical_conditions}</p>
                        <p>Identifying Marks: {child.marks}</p>
                        {edit ? null : <p>Additional Information: {info} </p>}
                    </div>
                    {edit ? <>
                        {flier ? <div className="row">
                            <div class="mb-3">
                                <label for="Height" class="form-label">Additional Information:</label>
                                <textarea onChange={(e) => setInfo(e.target.value)} type="text" class="form-control" cols="20" id="Height" />
                            </div>
                        </div> : null}
                        {flier ? <div className="row">
                            <div class="mb-3">
                                <button className="btn btn-primary" onClick={handleCreateFlier}>Transform Into Flier</button>
                            </div>
                        </div> : null}
                    </> : null}






                </div>




                {flier ?
                    <div className="card-footer bg-primary">
                        <div className="row text-center text-secondary">
                            <p>Contact Your Local Authorities If You Have Any Information</p>
                        </div>

                    </div> :
                    <div className="card-footer bg-primary">
                        <div className="row text-center text-secondary">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <Link href={`/children/${child.id}`}>
                                    <a className="text-secondary">Browse</a>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <Link href={`/children/flier/${child.id}`}>
                                    <a className="text-secondary">Flier</a>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">

                                <Link href={`/children/edit/${child.id}`}>
                                    <a className="text-secondary">Edit</a>
                                </Link>

                            </div>
                        </div>

                    </div>}

            </div>
        </>
    )



}
