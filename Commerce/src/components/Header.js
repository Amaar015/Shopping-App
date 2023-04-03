import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand >Pavalion Store</Navbar.Brand>
                </LinkContainer>
                <Nav className="ml-auto">

                    <LinkContainer to='/cart'>
                        <Nav.Link ><i class="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/signIn'>
                        <Nav.Link ><i class="far fa-user"></i>SignIn</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header