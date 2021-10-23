import React from 'react'
import Layout from '../components/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Addchild({ user }) {


    const [gender, setGender] = React.useState('')
    const [dob, setDob] = React.useState('')
    const [height, setHeight] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const [eye, setEye] = React.useState('')
    const [hair, setHair] = React.useState('')
    const [medical, setMedical] = React.useState('')
    const [marks, setMarks] = React.useState('')
    const [race, setRace] = React.useState('')
    const [errormsg, setErrormsg] = React.useState('')
    const [image, setImage] = React.useState('')

    const handleupload = async () => {

        var formdata = new FormData();
        formdata.append("file", image);
        formdata.append("upload_preset", "godschild");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.cloudinary.com/v1_1/lokiddo/auto/upload", requestOptions)
            .then(response => response.text())
            .then(result => {
                let img = JSON.parse(result)
                let body = {
                    parentid: user.id,
                    gender,
                    dob,
                    race,
                    image: img.secure_url,
                    height,
                    weight,
                    marks,
                    hair,
                    eye,
                    medical_conditions: medical

                }
                return body
            })
            .then(resolution => {
                console.log(resolution)
                handleSubmit(resolution)
            })
            .catch(error => console.log('error', error));
    }

    const handleSubmit = async (body) => {

        try {
            const res = await fetch('/api/children/addnew', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session)
                Router.push(session.url)

            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setErrormsg(error.message)
        }
    }


    return (
        <>
            <Layout>
                <h1 className="my-3">Add New Child</h1>
                <form onSubmit={handleupload}>
                    <div class="mb-3">
                        <label for="gender" class="form-label">Gender</label>
                        <select onChange={(e) => setGender(e.target.value)} class="form-select" aria-label="Default select example">
                            <option selected>Male</option>
                            <option value="1">Female</option>

                        </select>

                    </div>
                    <div class="mb-3">
                        <label for="race" class="form-label">Race</label>
                        <select onChange={(e) => setRace(e.target.value)} class="form-select" aria-label="Default select example">
                            <option selected>African American</option>
                            <option value="1">Caucasian</option>

                        </select>

                    </div>
                    <div class="mb-3">
                        <label for="Dateofbirth" class="form-label">Date Of Birth</label>

                        <DatePicker dateFormat="yyyy-MM-dd" selected={dob} onChange={(date) => setDob(date)} />
                    </div>
                    <div class="mb-3">
                        <label for="Height" class="form-label">Height</label>
                        <input onChange={(e) => setHeight(e.target.value)} type="text" class="form-control" id="Height" />
                    </div>
                    <div class="mb-3">
                        <label for="Weight" class="form-label">Weight</label>
                        <input onChange={(e) => setWeight(e.target.value)} type="number" class="form-control" id="Weight" />
                    </div>
                    <div class="mb-3">
                        <label for="eye" class="form-label">Eye Color</label>
                        <select onChange={(e) => setEye(e.target.value)} class="form-select" aria-label="Eye Color">
                            <option selected>Brown</option>
                            <option value="black">Black</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>

                        </select>

                    </div>
                    <div class="mb-3">
                        <label for="hair" class="form-label">Hair Color</label>
                        <select onChange={(e) => setHair(e.target.value)} class="form-select" aria-label="Hair Color">
                            <option selected>Brown</option>
                            <option value="black">Black</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>

                        </select>

                    </div>
                    <div class="mb-3">
                        <label for="medicalconditions" class="form-label">Medical Conditions</label>
                        <textarea onChange={(e) => setMedical(e.target.value)} cols="30" type="text" class="form-control" id="medicalconditions" />
                    </div>
                    <div class="mb-3">
                        <label for="marks" class="form-label">Identifying Marks</label>
                        <textarea onChange={(e) => setMarks(e.target.value)} cols="30" type="text" class="form-control" id="marks" />
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Image</label>
                        <input onChange={(e) => setImage(e.target.files[0])} class="form-control" type="file" id="formFile" />
                    </div>
                    {errormsg ? <div class="mb-3">
                        {errormsg}
                    </div> : null}
                    <div class="mb-3">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </Layout>
        </>
    )
}
