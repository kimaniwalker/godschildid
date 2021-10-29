import Topheader from './topheader'
import styles from '../styles/css/header.module.css'
import { useAppContext } from '../lib/context/userstate'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'

const Header = () => {
  const user = useAppContext()

  return (
    <>
      <Topheader />
      {!user.user

        ?

<Navbar bg="primary2" variant="dark" expand="lg" sticky="top">
  <Container>
    {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="container-fluid d-flex justify-content-center">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/faq">Faq</Nav.Link>
        <Nav.Link href="/links">Important Links</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

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
