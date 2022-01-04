import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Faq = () => {
    return (
        <div className="faq-area py-5">
            <Container>
                <Row>
                    <Col>
                        <div className="faq-left">
                            <h6 className="theme-color">FAQ</h6>
                            <h3>Frequently Asked Questions</h3>
                            <p>Helping Hands is not a chain or a franchise, we’re a small family caring for you and your family. We don’t handle big contracts or focus on volume business. Instead we provide the very best care, tailored to individual cases.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="faq-right">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="theme-color">
                                        Who We are
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        We are helping hands, provides donation service for helpless people various kinds of services like fresh water service, women and child care, refugee care, education service.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="theme-color">
                                        Our Mission
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        It’s hard to believe it’s only been 6 weeks since our stores reopened, post-lockdown! Since then our staff and volunteers have done an incredible job accepting and sorting donations, serving our wonderful customers, delivering out material aid and ensuring Victorian families have the food and toiletries they need, especially in the lead up to Christmas – a time that can be especially stressful for our most vulnerable members of the community.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="theme-color">
                                        Our Vision
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Helping Hands Healthcare is envisioned as a comprehensive home healthcare company which values service through high-quality healthcare. The operation will be distinctive in serving diverse clients in Ohio. The identity of the company will be framed by substantial commitment to our community and its people
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header className="theme-color">
                                        Adult care services from Helping Hands
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Home care from Helping Hands will enable you to continue living at home and live life on your terms, instead of having to move into a care home or residential setting. After all, everyone is most comfortable in their own home, surrounded by possessions, loved ones and maybe even a doting pet.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;