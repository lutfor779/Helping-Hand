import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../images/trash.jpg"
import img2 from "../../../images/huddle.jpeg"
import img3 from "../../../images/tree.webp"
import img4 from "../../../images/garbage.jpg"

const Activity = () => {
  return (
    <div className="latest-news py-5 text-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <div className="section-title mb-5 text-center">
              <h3>Activity Gallery</h3>
              <p>
                Our website activity gallery are placed in this section.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <div className="single-activity mb-3">
              <img
                src={img1}
                className="img-fluid"
                alt=""
              />
              <p className="mt-3">A group people clean up at the trash exit to the forest to the spring</p>
            </div>
          </Col>
          <Col>
            <div className="single-activity mb-3">
              <img
                src={img2}
                className="img-fluid"
                alt=""
              />
              <p className="mt-3">A group of volunteers forming huddies in park</p>
            </div>
          </Col>
          <Col>
            <div className="single-activity mb-3">
              <img
                src={img3}
                className="img-fluid"
                alt=""
              />
              <p className="mt-3">A group volunteers planting tree in the park</p>
            </div>
          </Col>
          <Col>
            <div className="single-activity mb-3">
              <img
                src={img4}
                className="img-fluid"
                alt=""
              />
              <p className="mt-3">A  volunteers peeking garbage in the beach</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Activity;
