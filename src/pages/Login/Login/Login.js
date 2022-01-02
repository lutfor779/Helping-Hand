import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import useAuth from '../../../hooks/useAuth';
import '../style.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { error, setError, signInWithGoogle, signInWithEmailPassword } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData };
        newLogInData[field] = value;
        setError('')
        setLoginData(newLogInData);
    }

    const handleLoginSubmit = (e) => {
        signInWithEmailPassword(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }


    return (
        <Container className='center text-white'>
            <div>
                <h1 className='text-center pb-4'>Please Login</h1>

                <Row xs={1} md={2} className='border align-items-center p-5 login-design'>

                    <Col className='p-3'>

                        <Form onSubmit={handleLoginSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    required
                                    onBlur={handleOnBlur} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    required
                                    onBlur={handleOnBlur} />
                            </Form.Group>

                            {error && <Alert variant="danger">{error}</Alert>
                            }


                            <Button variant="primary" type="submit">
                                Login
                            </Button>


                            {/* new user? */}

                            <Button variant="text" className='text-white mt-3' onClick={() => navigate('/resister')} >New User? Please Resister.</Button>
                        </Form>

                    </Col>

                    <Col className='p-3 text-center'>
                        <h1 className='mb-5 text-warning'>Welcome To <br /> Helping Hand </h1>



                        {/* sign in with google */}
                        <Button
                            className='w-100'
                            variant="danger"
                            onClick={() => signInWithGoogle(location, navigate)}>
                            Login with google
                        </Button>

                        <LinkContainer to="/">
                            <Button className='d-block mx-auto mt-4 px-4' size="sm" variant='outline-light'>
                                Go to Home
                            </Button>
                        </LinkContainer>

                    </Col>
                </Row>


            </div>
        </Container>
    );
};

export default Login;