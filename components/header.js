import Link from 'next/link'
import { useUser } from '../lib/hooks'
import Topheader from './topheader'

const Header = () => {
  const user = useUser()

  return (
    <>
    <Topheader />
    <header className="bg-primary2 justify-content-center d-flex sticky-top">
      
        <ul className="align-items-center">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/mypage">
              <a>My Page</a>
            </Link>
          </li>
          <li>
            <Link href="/links">
              <a>Important Links</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
          {user ?
          <>
          <li>
            <Link href="/api/auth/logout">
              <a>Logout</a>
            </Link>
          </li>
          </> : <>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          </>  }
        </ul>
      <style jsx>{`
        
        ul {
          display: flex;
          list-style: none;
        }
        li {
         
          margin: 10px 20px;
          
          
        }
        
        a {
          color: #fff;
          text-decoration: none;
        }
        
      `}</style>
    </header>
    </>
  )
}

export default Header
