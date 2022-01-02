import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
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
                        <Navbar.Text>
                            User Name &nbsp;
                        </Navbar.Text>
                        <Button variant="outline-light" >
                            Login
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;