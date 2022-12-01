import React from 'react'
import Layout from '../components/layout'
import Router from 'next/router'

export default function Lawenforcement(props) {
    const [number, setNumber] = React.useState("")
    const [info, setInfo] = React.useState([])
    const [error, setError] = React.useState('')
    const disabled = true ? !number : false

    const handleSubmit = async () => {
        console.log(number)
        setNumber("")
        await getInfo()
    }

    React.useEffect(() => {


    }, [info])

    const getInfo = async () => {

        let body = {
            id: number
        }

        try {
            const res = await fetch('/api/children/findchild', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.status === 200) {
                const session = await res.json()
                console.log(session.results)
                setInfo(session.results)
                if (session.results) {
                    Router.push(`/children/flier/${number}?first=${session.results.first_name}&last=${session.results.last_name}&edit=false&info=${session.results.additional_info}&marks=${session.results.marks}`)
                } else {
                    console.log('test')
                    setError('Incorrect unique identifier')
                }

            } else {
                throw new Error(await res.text())
            }


        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
        }
    }

    return (
        <>
            <Layout>
                <div className='w-50 mx-auto'>

                    <label className='my-2'>Enter the unique child identifier:</label>
                    {error ? <p className='text-danger'>{error}</p> : null}
                    <input className='w-100' type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                    <button disabled={disabled} className='w-100 bg-primary my-3 py-1 text-light' onClick={handleSubmit} onSubmit={handleSubmit}>Submit</button>
                </div>
            </Layout>
        </>
    )
}
