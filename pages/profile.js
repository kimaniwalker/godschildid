import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Stripesetup from '../components/stripesetup'
import Stripebilling from '../components/stripeBilling'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <Layout>
      <h1>My Profile</h1>
      <div>Enter Payments Details For Full Access</div>
      {user && (
        <div>{!user.customer_id ? <Stripesetup user={user} /> : <Stripebilling user={user} />}</div>
      ) }
      {user && (
        <>
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
