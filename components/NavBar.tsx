import Link from "next/link"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand>LOGO</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" passHref>
                            <Nav.Link>Users</Nav.Link>
                        </Link>
                        <Link href="/todos" passHref>
                            <Nav.Link>Todos</Nav.Link>
                        </Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar