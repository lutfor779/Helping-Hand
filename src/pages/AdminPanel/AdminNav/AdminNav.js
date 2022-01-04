import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo1.png'
import './AdminNav.css'

const AdminNav = () => {
    const { user, logOut } = useAuth();


    return (
            <Navbar bg="primary" variant="dark" className='navbar' className="py-3" expand={false}>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >
                            <img src={logo} height="35" alt="Logo" />
                            </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Admin Panel</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <LinkContainer to="makeAdmin" >
                                    <Nav.Link>Make Admin</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="addEvent" >
                                    <Nav.Link>Add Events</Nav.Link>
                                </LinkContainer>

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
                                            <Button>Login</Button>
                                        </LinkContainer>
                                }

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        <Navbar bg="primary" variant="dark" expand={false}>
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand >Helping Hand</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Admin Panel</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <LinkContainer to="makeAdmin" >
                                <Nav.Link>Make Admin</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="addEvent" >
                                <Nav.Link>Add Events</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="addCauses" >
                                <Nav.Link>Add Causes</Nav.Link>
                            </LinkContainer>
                           
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
                                        <Button>Login</Button>
                                    </LinkContainer>
                            }

                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
};

export default AdminNav;