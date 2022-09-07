import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Socialshare from './socialshare'
import Router from 'next/router'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { toast } from 'react-toastify'


export default function Childcard({ child, flier }) {

    const [first, setFirst] = React.useState('')
    const [last, setLast] = React.useState('')
    const [info, setInfo] = React.useState('')
    const [edit, setEdit] = React.useState(true)
    const [age, setAge] = React.useState(child.dob.split("-"))
    const router = useRouter()

    const success = () => toast.success("Success, now refresh the page");
    const toasterror = () => toast.error("There was an error");


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


    function calculate_age(dob) {
        return Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e+10)
    }

    const deleteChild = async () => {
        let body = {
            id: child.id
        }

        try {
            const res = await fetch('/api/children/removechild', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session)
                success()
                Router.push('/mypage')



            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            toasterror()
        }
    }



    return (
        <>
            <div id="printarea" class="card h-100">

                {flier ?
                    <div class="card-header text-white bg-dark">
                        <div className="row justify-content-space-between align-items-center">
                            <div className="col">
                                <Image width={200} height={100} src={logo} />
                            </div>
                            <div className="col px-3">
                                <h2 className="text-white text-end">Missing Child</h2>
                            </div>


                        </div>


                    </div>
                    :
                    null}


                <div class="card-body">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                            <img src={child.image} class="card-img w-100" alt="profile pic" />
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




                                <p>Age: {calculate_age(new Date(age[0], age[1], age[2].substring(0, 2)))}</p>
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
                                <button className="btn btn-success" onClick={handleCreateFlier}>Transform Into Flier</button>
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
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-secondary">
                                <Link href={`/mypage`}>
                                    <a onClick={deleteChild} className="text-secondary">Delete</a>
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
