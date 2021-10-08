import React from 'react'
import Layout from '../components/layout'

export default function Contact(props) {
    const [message, setmessage] = React.useState('')
    const [email, setemail] = React.useState('')
    const [subject, setsubject] = React.useState('')

    const handleSubmit = async () => {

        let body = {
            to: 'Support@GodschildID.com',
            content: message,
            subject: subject
        }

        try {
            const res = await fetch(`/api/contact/sendemail`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const user = await res.json()
                console.log(user)
                Router.push('/')

            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setErrorMsg(error.message)
        }
    }


    return (
        <>
            <Layout>
                <h2 className="py-3">Send Us A Message</h2>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Subject</label>
                        <input value={subject} onChange={(e) => setsubject(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea value={message} onChange={(e) => setmessage(e.target.value)} on class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Messagae</button>
                </form>
            </Layout>


        </>
    )
}
