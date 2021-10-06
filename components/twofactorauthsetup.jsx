import React from 'react'
import Router from 'next/router'


export default function Twofactorauthsetup({ user }) {

    const [selection, setselection] = React.useState(user.auth)
    const [phone, setphone] = React.useState(false)
    const [phonenumber, setphonenumber] = React.useState(user.phone)
    const [errmessage, seterrmsg] = React.useState('')
    const [enabled, setenabled] = React.useState(null)

    React.useEffect(() => {
        if (!user.auth) {
            setenabled(false)
        } else {
            setenabled(true)
        }
    }, [])

    const handletoggle = async () => {

        if (!enabled) {
            setenabled(true)
        } else {
            setenabled(false)
            setselection(null)

            let body = {
                auth: null,
                id: user.id
            }

            try {
                const res = await fetch(`/api/auth/updateuser`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
                if (res.status === 200) {
                    const session = await res.json()
                    console.log(session)


                } else {
                    throw new Error(await res.text())
                }
            } catch (error) {
                console.error('An unexpected error happened occurred:', error)
                seterrmsg(error.message)

            }


        }
    }

    const handleEmail = () => {
        setselection('email')
        setphone(false)
        if (document.getElementById("emailcheckbox").checked = true) {
            document.getElementById("phonecheckbox").checked = false;
        }

    }

    const handlephone = () => {
        setselection('phone')
        setphone(true)
        if (document.getElementById("phonecheckbox").checked = true) {
            document.getElementById("emailcheckbox").checked = false;
        }
    }

    const handleSave = async () => {
        let body = {
            auth: selection,
            phone: phonenumber,
            id: user.id
        }

        try {
            const res = await fetch(`/api/auth/updateuser`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session)
                Router.push("/profile")

            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            seterrmsg(error.message)

        }
    }

    if (enabled) {
        return (
            <>
                <div class="form-check form-switch py-3">
                    <input onChange={handletoggle} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Disable Two Factor Authentication</label>
                </div>
                <div>
                    <div class="form-check">
                        <input onChange={handleEmail} class="form-check-input" type="checkbox" id="emailcheckbox" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Email Verification
                        </label>
                    </div>
                    <div class="form-check">
                        <input onChange={handlephone} class="form-check-input" type="checkbox" id="phonecheckbox" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Phone Verification
                        </label>
                    </div>
                    {phone ? <div><div class="input-group mb-3 py-3">
                        <span class="input-group-text" id="basic-addon1">+1</span>
                        <input onChange={(e) => setphonenumber(e.target.value)} value={phonenumber} type="text" class="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
                    </div></div> : null}
                    {selection ? <button onClick={handleSave} className="btn btn-primary my-2 w-100">Save</button> : <button onClick={handleSave} className="btn btn-primary my-2 w-100" disabled>Save</button>}

                </div>
            </>
        )
    } else {
        return (
            <>


                <div class="form-check form-switch">
                    <input onChange={handletoggle} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Enable Two Factor Authentication</label>
                </div>
            </>
        )
    }


}
