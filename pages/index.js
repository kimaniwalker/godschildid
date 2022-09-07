import { useUser } from '../lib/hooks'
import Layoutfull from '../components/layoutfull'
import Homebanner from '../components/homebanner'
import Homebanner2 from '../components/homebanner2'
import Pricing from '../components/pricing'


const Home = () => {
  const user = useUser()

  return (
    <Layoutfull title='Home' description='Gods Child ID is a faith-based company created by a parent just like you. The need for an online ID Kit which can be updated as your children grow is really a must especially in the times, we now live in. Add to this the speed in which a child’s information can be texted or emailed to law enforcement and shared with others via social media is a huge advantage compared to the ID Kits that have been given to parents in the past.'>
      <Homebanner2 />
      <Homebanner />

      <div className="d-flex m-5 flex-row justify-content-center align-items-center">
        <div className='mx-lg-5 px-lg-5'>

          <h2 className="py-3">How It Works</h2>
          <p>At God’s Child ID we have strived to make everything simple and easy. This includes signing up to become a member, adding information about your children and being able to quickly share that information to Law Enforcement etc. Below are the steps you will need to take to get started.</p>
          <ol>
            <li>Register for a new account on our <a href="/signup">signup</a> page.</li>
            <li>Once you have logged in, you will be directed to the settings page where you will be directed to enter your access code. Enter your access code and click save. If your code is entered correctly , you will be granted full access. <b>You may need to refresh your screen for changes to take effect.</b></li>
            <li>Setup two factor authentication to enable additional security measures via email or text keeping your childrens information safe and secure.</li>
            <li>You will receive an email from God’s Child ID three times a year reminding you to update your children’s information.</li>
          </ol>

          <h2 className="py-3">What To Do If Your Child Is Lost or Abducted</h2>
          <ol>
            <li>Contact Law Enforcement by dialing 911. Inform them of your situation and let them know you have a digital ID Kit with your child’s picture and their information. Ask them if you should text or email it to them.</li>
            <li>Go to that child’s information under My Children’s Page and click on the Flier Icon underneath that child’s info. Add your child’s name and information such as what they are wearing, where last seen etc.</li>
            <li>Once this is done click on the Green Flier Icon and then choose Text, Email, Share to Facebook or Print. (You can always come back and choose the other options after its first sent to Law Enforcement). If you choose text , you will receive a text message with the link to the flier. Once you have received the link , forward this link to anyone you may want to share with including 911.</li>
            <li>If you’re at an amusement park, state or national park quickly find their security or park rangers and text the Flier to them so their entire team can BOLO for you’re child.</li>
          </ol>
          <strong>Note: Be sure and read the information under Important Links on our homepage.</strong>
        </div>

      </div>


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
