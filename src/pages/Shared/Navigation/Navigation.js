import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Helping Hand</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        {/* <LinkContainer > */}
                        <Nav.Link>Get Started</Nav.Link>
                        {/* </LinkContainer> */}

                        {/* <LinkContainer > */}
                        <Nav.Link>Donation</Nav.Link>
                        {/* </LinkContainer> */}

                        {/* <LinkContainer > */}
                        <Nav.Link>Services</Nav.Link>
                        {/* </LinkContainer> */}
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