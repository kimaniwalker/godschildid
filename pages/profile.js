import React from 'react'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Stripesetup from '../components/stripesetup'
import Stripebilling from '../components/stripeBilling'
import Profilecard from '../components/profileCard'
import Twofactorauthsetup from '../components/twofactorauthsetup'


const Profile = () => {
  const user = useUser({ redirectTo: '/login' })
  const [customer, setcustomer] = React.useState([])

  const getcustomerinfo = async () => {
    let body = {
      customer_id: user.customer_id
    }

    try {
      const res = await fetch(`/api/payments/customerinfo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        const session = await res.json()
        setcustomer(session)


      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)


    }
  }

  React.useEffect(() => {

    {
      user && user.customer_id ? getcustomerinfo() : null
    }

  }, [user])

  return (
    <Layout>

      {user && (
        <>
          <h1 className="py-4">My Profile</h1>
          <Profilecard title={'Manage Subscription'} body={'Cancel your subscription anytime. Use this portal to view and manage your subscription information.'} image={<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16">
            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
          </svg>} stripe={<Stripebilling user={user} />} />

          <Profilecard title={'Two Factor Authentication'} body={'Secure your account by enabling two factor authentication. You can select from email or phone verification.'} image={<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
            <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
          </svg>} stripe={<Twofactorauthsetup user={user} />} />

          {customer.customer.subscriptions.data[0].status === 'active' ? <Profilecard title={'Add New Child'} body={'Add and modify your children\'s demographic information here. Don\'t forget to update it every 3-4 months !'} image={<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
          </svg>} stripe={<Stripebilling user={user} />} /> : null}


          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
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
