import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">Pavalion Store</Navbar.Brand>
                <Nav className="ml-auto">

                    <Nav.Link href="#features"><i class="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    <Nav.Link href="#pricing"><i class="far fa-user"></i>SignIn</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header