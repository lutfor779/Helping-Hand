import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Helping Hand</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <LinkContainer to="/getStarted" >
                            <Nav.Link>Get Started</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/donation" >
                            <Nav.Link>Donation</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" >
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/services">
                            <Nav.Link>Services</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <Nav>
                        {
                            user.displayName && <Navbar.Text>
                                {user.displayName} &nbsp;
                            </Navbar.Text>
                        }

                        {
                            user.email ?
                                <Button
                                    variant='danger'
                                    onClick={logOut}>Logout</Button>
                                :
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;