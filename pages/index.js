import { useUser } from '../lib/hooks'
import Layoutfull from '../components/layoutfull'
import Homebanner from '../components/homebanner'
import Homebanner2 from '../components/homebanner2'
import Pricing from '../components/pricing'


const Home = () => {
  const user = useUser()

  return (
    <Layoutfull>
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
