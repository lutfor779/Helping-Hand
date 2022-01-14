import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../images/lutfor2.png';
import image2 from '../../../images/nahar.png';
import image3 from '../../../images/rimon.png';
import image4 from '../../../images/tanvir.png';
import './Credits.css';

const Credits = () => {
    return (
        <Container className='pb-5'>
            <h2 className='text-center text-color fw-bold mt-5 mb-3'>
                Project Contributors
            </h2>
            <Row xs={1} md={2} lg={3} xl={4} className="g-5 p3-5 p-3 text-center">
                <Col>
                    <Card className="h-100 rounded custom-shadow we text-light">
                        <Card.Img variant="top" src={image1} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title className='title'>Md. Lutfor Rahman</Card.Title>
                            <Card.Text>  Leader & Full Stack Developer</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://drive.google.com/file/d/18b6KTrb3fTtyDcACYpww3xH98xGZiqjV/view?usp=sharing" rel='noreferrer' target="_blank"><Button className='btn btn-danger rounded-pill px-3 button-color  w-100 mb-3' size="sm">Resume</Button></a>
                            <Card.Text className="text text-color">
                                Find With Me
                            </Card.Text>
                            <Card.Link href="https://www.linkedin.com/in/md-lutfor-rahman-1b78a9216/" target="_blank">
                                <i className="lab la-linkedin"></i>
                            </Card.Link>
                            <Card.Link href="https://github.com/lutfor779" target="_blank">
                                <i className="lab la-github"></i>
                            </Card.Link>
                            <Card.Link href="https://www.facebook.com/profile.php?id=100060296948064" target="_blank">
                                <i className="lab la-facebook"></i>
                            </Card.Link>
                            <Card.Link href="https://my-portfolio-e2e64.web.app/" target="_blank">
                                <i className="las la-globe"></i>
                            </Card.Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded custom-shadow we text-light">
                        <Card.Img variant="top" src={image4} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title className='title'>Nurul Islam</Card.Title>
                            <Card.Text>Co-Leader & Backend Developer</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className='btn btn-danger rounded-pill px-3 button-color  w-100 mb-3' size="sm">Resume</Button>
                            <Card.Text className="text text-color">
                                Find With Me
                            </Card.Text>
                            <Card.Link href="https://www.linkedin.com/in/nurul-islam-4a592a216/" target="_blank">
                                <i className="lab la-linkedin"></i>
                            </Card.Link>
                            <Card.Link href="https://github.com/NurulIslam-EEE" target="_blank">
                                <i className="lab la-github"></i>
                            </Card.Link>
                            <Card.Link href="https://www.facebook.com/profile.php?id=100007142776230" target="_blank">
                                <i className="lab la-facebook"></i>
                            </Card.Link>
                            {/* <Card.Link href="" target="_blank">
                                    <i className="las la-globe"></i>
                                </Card.Link> */}
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded custom-shadow we text-light">
                        <Card.Img variant="top" src={image2} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title className='title'>Nurar Nahar</Card.Title>
                            <Card.Text>  Frontend Developer</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://drive.google.com/file/d/12fwWqfOGZ1nrgB-uJhGEmNMrbQmy5YpM/view" rel='noreferrer' target="_blank"><Button className='btn btn-danger rounded-pill px-3 button-color  w-100 mb-3' size="sm"> Resume </Button></a>
                            <Card.Text className="text text-color">
                                Find With Me
                            </Card.Text>
                            <Card.Link href="https://www.linkedin.com/in/nurarnahar/" target="_blank">
                                <i className="lab la-linkedin"></i>
                            </Card.Link>
                            <Card.Link href="https://github.com/sahinur31" target="_blank">
                                <i className="lab la-github"></i>
                            </Card.Link>
                            <Card.Link href="https://www.facebook.com/sahinur.me/" target="_blank">
                                <i className="lab la-facebook"></i>
                            </Card.Link>
                            <Card.Link href="https://portfolio-nur.netlify.app/" target="_blank">
                                <i className="las la-globe"></i>
                            </Card.Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 rounded custom-shadow we text-light">
                        <Card.Img variant="top" src={image3} className="rounded-top" style={{ backgroundColor: "#080726" }} />
                        <Card.Body>
                            <Card.Title className='title'>Imam Hassan Rimon</Card.Title>
                            <Card.Text>Frontend & UI Developer</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://drive.google.com/file/d/12k10j4xPFsdY8o4HejMkVssbOKZdvmzm/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Button className='btn btn-danger rounded-pill px-3 button-color  w-100 mb-3' size="sm">Resume</Button></a>

                            <Card.Text className="text text-color">
                                Find With Me
                            </Card.Text>
                            <Card.Link href="https://www.linkedin.com/in/imam-hassan-rimon-191164227/" target="_blank">
                                <i className="lab la-linkedin"></i>
                            </Card.Link>
                            <Card.Link href="https://github.com/ihrimon" target="_blank">
                                <i className="lab la-github"></i>
                            </Card.Link>
                            <Card.Link href="https://www.facebook.com/grapsign.net/" target="_blank">
                                <i className="lab la-facebook"></i>
                            </Card.Link>
                            <Card.Link href="https://rimon-webfolio.netlify.app/" target="_blank">
                                <i className="las la-globe"></i>
                            </Card.Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Credits;
