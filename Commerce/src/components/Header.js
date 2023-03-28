import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">Pavalion Store</Navbar.Brand>
                <Nav className="ml-auto">

                    <Nav.Link href="#features">Cart</Nav.Link>
                    <Nav.Link href="#pricing">SignIn</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header