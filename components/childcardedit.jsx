import Router from 'next/router'
import React, { useEffect } from 'react'


export default function Childcardedit({ child }) {

    const [image, setImage] = React.useState(child.image)
    const [height, setHeight] = React.useState(child.height)
    const [weight, setWeight] = React.useState(child.weight)
    const [medical, setMedical] = React.useState(child.medical_conditions)
    const [marks, setMarks] = React.useState(child.marks)
    const [hair, setHair] = React.useState(child.hair)
    const [uploadimg, setUploadimg] = React.useState('')
    const [errormsg, setErrormsg] = React.useState('')

    const imgupload = async () => {

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
                    id: child.id,
                    image: img.secure_url,
                    height,
                    weight,
                    marks,
                    hair,
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

            const res = await fetch('/api/children/updatechild', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session)
                Router.push(`/children/edit/${child.id}`)


            } else {
                throw new Error(await res.text())
            }




        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setErrormsg(error.message)
        }
    }

    const imgstyle = {
        verticalAlign: "middle",
        width: "200px",
        height: "200px",
        borderRadius: "50%"
    };


    return (
        <>
            <div className="row justify-content-center">
                <img src={child.image} style={imgstyle} ></img>
            </div>


            <div className="mb-3">
                <label for="height" class="form-label">Height</label>
                <input onChange={(e) => setHeight(e.target.value)} value={height} type="text" class="form-control" id="height" />
            </div>
            <div className="mb-3">
                <label for="weight" class="form-label">Weight</label>
                <input onChange={(e) => setWeight(e.target.value)} value={weight} type="number" class="form-control" id="weight" />
            </div>
            <div className="mb-3">
                <label for="hair" class="form-label">Hair</label>
                <input onChange={(e) => setHair(e.target.value)} value={hair} type="text" class="form-control" id="hair" />
            </div>
            <div className="mb-3">
                <label for="medical" class="form-label">Medical</label>
                <input onChange={(e) => setMedical(e.target.value)} value={medical} type="text" class="form-control" id="medical" />
            </div>
            <div className="mb-3">
                <label for="marks" class="form-label">Marks</label>
                <textarea cols="20" onChange={(e) => setMarks(e.target.value)} value={marks} type="text" class="form-control" id="marks" />
            </div>

            <div class="mb-3">
                <label for="formFile" class="form-label">Image</label>
                <input onChange={(e) => setImage(e.target.files[0])} class="form-control" type="file" id="formFile" />
            </div>
            {errormsg ? <div class="mb-3">
                {errormsg}
            </div> : null}
            <div className="mb-3">
                <button onClick={imgupload} className="btn btn-primary"> Update Child</button>
            </div>



        </>
    )
}
