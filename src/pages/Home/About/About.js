import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../../images/about.jpg";
import './About.css';

const About = () => {
  return (
    <div className="about-area py-5">
      <Container>
        <Row className="align-items-center">
          <Col xl={8}>
            <div className="single-about mb-5">
              <h6 className="theme-color mb-3">| ABOUT US</h6>
              <h3 className="mb-3">WE ARE CREATIVE</h3>
              <p className="mb-2" style={{lineHeight:'30px'}}>
                Helping Hand is a not-for-profit organisation offering help at
                home, retirement living and residential care to over 7,000 older
                South Australians in Adelaide and regional South Australia.
              </p>
              <p style={{lineHeight:'30px'}}>
                We value independence, choice, freedom and quality of care. We
                enable our clients, carers and their families to live their
                lives to the full. We make people feel at home; in our
                residential homes, in their own home and in their workplace.
              </p>
              <button className="btn theme-bg px-4 text-white">READ MORE</button>
            </div>
          </Col>
          <Col xl={4}>
          <div className="about-img text-center">
                <img className="img-fluid" style={{width: '100%', height: '270px'}} src={about} alt="" />
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
