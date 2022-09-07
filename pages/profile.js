import React from 'react'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Profilecard from '../components/profileCard'
import Twofactorauthsetup from '../components/twofactorauthsetup'
import Link from 'next/link'
import { useAppContext } from '../lib/context/userstate'


const Profile = () => {
  const user = useUser({ redirectTo: '/login' })
  const [customer, setcustomer] = React.useState([])
  const [code, setCode] = React.useState('')
  const { isActive } = useAppContext()
  const success = () => toast.success("Success");
  const toasterror = () => toast.error("There was an error");


  const handleUpdate = async () => {
    let body = {
      code: code,
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
        success()


      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      toasterror()

    }
  }

  return (
    <Layout title='Profile Page'>

      {user && !isActive && (
        <Profilecard title={'Access code'} body={'Enter your access code for complete access to GodsChildId'} image={<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-unlock" viewBox="0 0 16 16">
          <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />
        </svg>} link={<>
          <input className="w-100 mb-2" onChange={(e) => setCode(e.target.value)} />
          <Link href="/children/createchild">
            <button disabled={code.length <= 1 ? true : false} onClick={handleUpdate} className="btn btn-primary w-100 mb-2">Save</button>
          </Link></>} />
      )}

      {user && isActive && (
        <>

          <Profilecard title={'Two Factor Authentication'} body={'Secure your account by enabling two factor authentication. You can select from email or phone verification.'} image={<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
            <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
          </svg>} link={<Twofactorauthsetup user={user} />} />


          <Profilecard title={'Add A Child'} body={'Add your childrens information. You can retrieve it by visiting the childrens workspace.'} image={<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
          </svg>} link={<><Link href="/children/createchild">
            <button className="btn btn-primary w-100 mb-2">Add A Child</button>
          </Link></>} />

          <Profilecard title={'Childrens Workspace'} body={'Create fliers and modify your children\'s demographic information here. Don\'t forget to update it every 3-4 months !'} image={< svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>} link={<><Link href="/mypage">
            <button className="btn btn-primary w-100 mb-2">Eight Up Page</button>
          </Link></>} />

        </>
      )}

      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </Layout>
  )
}



export default Profile
