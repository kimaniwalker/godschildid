import Topheader from './topheader'
import styles from '../styles/css/header.module.css'
import { useAppContext } from '../lib/context/userstate'


const Header = () => {
  const user = useAppContext()

  return (
    <>
      <Topheader />
      {!user.user

        ?

        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-primary2 py-4">

          <div class="container-fluid d-flex justify-content-center">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class={styles.navLink} aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/faq">Faq</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/links">Important Links</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/login">Login</a>
              </li>
            </ul>

          </div>


        </nav>

        :

        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-primary2 py-4">

          <div class="container-fluid d-flex justify-content-center">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class={styles.navLink} aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} aria-current="page" href="/mypage">Six Up</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/faq">Faq</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/links">Important Links</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/profile">Profile</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/contact">Contact</a>
              </li>
              <li class="nav-item">
                <a class={styles.navLink} href="/api/auth/logout">Logout</a>
              </li>
            </ul>

          </div>


        </nav>
      }
    </>
  )
}

export default Header
