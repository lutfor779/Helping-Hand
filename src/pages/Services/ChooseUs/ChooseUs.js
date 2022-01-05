import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import choose from '../../../images/chose.jpg';
import ceo from '../../../images/player-1.png';
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="choose-area py-5">
      <Container>
        <Row className="justify-content-between">
          <Col md={6}>
            <div className="single-choose  mb-3">
                <img src={choose} style={{width:'100%'}} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="single-choose mb-3">
                <h6 className="text-uppercase text-color"> <BsPlusSquare /> who we are</h6>
                <h3>Why Choose Us</h3>
                <p>You choose us for our avilability and fund donation service. Our every volunteers works for ours. They done 100 + projects succcessfully.Donate to families with vulnerable children raised by single mothers. Empower vulnerable families for sustainability. View Portfolio. Experienced Team.</p>
                <div className="ceo-area theme-bg text-white rounded p-4">
                    <ul>
                        <li>Non profit crow funding agency</li>
                        <li>We are successful fund risers.</li>
                    </ul>
                    <div className="d-flex">
                        <div>
                            <img src={ceo} style={{ width: "60px", height: "60px" }} alt="" />
                        </div>
                        <div className="ms-3">
                            <h6>Michel H reaot</h6>
                            <h6>CEO, Founder</h6>
                        </div>
                    </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseUs;
