import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar className="color-sec" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>AliShop</Navbar.Brand>

                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to='/cart'>
                            <Nav.Link> <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/login'>
                            <Nav.Link> <i className='fas fa-shopping-cart'></i> Sign In</Nav.Link>
                        </LinkContainer>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

        </header >
    )
}

export default Header
