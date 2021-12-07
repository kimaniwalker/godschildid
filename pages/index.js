import { useUser } from '../lib/hooks'
import Layoutfull from '../components/layoutfull'
import Homebanner from '../components/homebanner'
import Homebanner2 from '../components/homebanner2'
import Pricing from '../components/pricing'


const Home = () => {
  const user = useUser()

  return (
    <Layoutfull title='Gods Child ID' description='Gods Child ID is a faith-based company created by a parent just like you. The need for an online ID Kit which can be updated as your children grow is really a must especially in the times, we now live in. Add to this the speed in which a child’s information can be texted or emailed to law enforcement and shared with others via social media is a huge advantage compared to the ID Kits that have been given to parents in the past.'>
      <Homebanner2 />
      <Homebanner />
      <Pricing />

      {/* <h1 className="text-primary">GodsChildId</h1>

      <p>Steps to test the example:</p>

      <ol>
        <li>Click Login and enter a username and password.</li>
        <li>
          You'll be redirected to Home. Click on Profile, notice how your
          session is being used through a token stored in a cookie.
        </li>
        <li>
          Click Logout and try to go to Profile again. You'll get redirected to
          Login.
        </li>
      </ol>

      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )} */}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </Layoutfull>
  )
}

export default Home
