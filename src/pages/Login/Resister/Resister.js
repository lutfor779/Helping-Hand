import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { LinkContainer } from 'react-router-bootstrap';


const Resister = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { resisterUser, error, setError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...registrationData };
        newLogInData[field] = value;
        setError('');
        setRegistrationData(newLogInData);
    }

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();

        if (registrationData.password !== registrationData.confirmPassword) {
            setError("Password did not match");
            return;
        }
        resisterUser(registrationData.email, registrationData.confirmPassword, registrationData.name, location, navigate);
    }

    return (
        <Container className='center text-white'>
            <div>
                <h1 className='text-center pb-4'>Please Resister</h1>

                <Row xs={1} md={2} className='border align-items-center p-5 login-design'>
                    <Col className='p-3'>
                        <Form onSubmit={handleRegistrationSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    required
                                    onBlur={handleOnBlur} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="lutfor@example.com"
                                    name="email"
                                    required
                                    onBlur={handleOnBlur} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name='password'
                                    required
                                    onBlur={handleOnBlur} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="retype password"
                                    name="confirmPassword"
                                    required
                                    onBlur={handleOnBlur} />
                            </Form.Group>

                            {error && <Alert variant="danger" >{error}</Alert>
                            }

                            <Button variant="primary" type="submit">
                                Resister
                            </Button>


                            {/* Have account? */}

                            <Button
                                variant="text"
                                className='text-white mt-3'
                                onClick={() => navigate('/login')}>
                                Already have an account? Login Here
                            </Button>

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

export default Resister;