import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { useAppContext } from '../lib/context/userstate'


export default function Socialshare({ pathname }) {



    const facebookshare = 'https://www.facebook.com/sharer/sharer.php?u=https%3A//godschildid.com' + pathname
    const user = useAppContext()

    const emailpath = generatepath(pathname)



    function generatepath(link) {
        const path = link.split("")
        let result = []

        path.map((letter) => {
            if (letter === '&') {
                result.push("%26")
            }
            else if (letter === '?') {
                result.push("%3F")
            } else {
                result.push(letter)
            }
        })
        let newpath = result.join('')
        console.log(newpath)
        return newpath
    }

    const handleprint = () => {
        window.print()
    }



    const sendText = async () => {

        let body = {
            phone: user.user.phone,
            message: 'https://www.godschildid.com' + pathname,

        }

        console.log(body)

        try {
            const res = await fetch(`/api/contact/sendtext`, {
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

        }
    }


    return (
        <>

            <div class="card">
                <div class="card-body">


                    <div className="py-2"><span>Select A Option To Share:</span></div>

                    <Link href={facebookshare}>
                        <a><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook mx-2 text-primary" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></span></a>
                    </Link>

                    <a style={{ cursor: "pointer" }} onClick={handleprint}><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-printer-fill text-primary" viewBox="0 0 16 16">
                        <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                        <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    </svg></span></a>


                    <a style={{ cursor: "pointer" }} onClick={sendText}><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-phone-fill mx-2 text-primary" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                    </svg></span></a>

                    {user && (
                        <a href={`mailto:${user.user.username}?subject=Gods Child Flier&body=https://www.godschildid.com${emailpath}`} target="_blank"><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill mx-2 text-primary" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg></span></a>
                    )}


                </div>
            </div>
        </>
    )
}
