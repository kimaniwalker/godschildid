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
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="container-fluid d-flex justify-content-center">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
        <Nav.Link href="/links">Important Links</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        :

<Navbar bg="primary2" variant="dark" expand="lg" sticky="top">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="container-fluid d-flex justify-content-center">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/mypage">My Children</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
        <Nav.Link href="/links">Important Links</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/profile">Settings</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/api/auth/logout">Logout</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      }
    </>
  )
}

export default Header
