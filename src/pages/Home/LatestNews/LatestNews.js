import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ceo from "../../../images/ceo.jpg";
import fund from "../../../images/fund.webp";
import group from "../../../images/group.jpg";
import editor from "../../../images/player-1.png";

const LatestNews = () => {
  return (
    <div className="latest-news py-5" style={{backgroundColor:'#FEF6F3'}}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <div className="section-title mb-5 text-center">
              <h6 className="theme-color">Our Blog</h6>
              <h3>Latest News & Update</h3>
              <p>
                Our website latest news is available here. You can see update
                news in this section.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <div className="single-news card">
              <img src={ceo} className="img-fluid" alt="" />
              <div className="p-3">
                <h4 className="my-2">Congratulations! to our Founder</h4>
                <div className="news-editor-date d-flex justify-content-between align-items-center">
                  <div className="news-editor d-flex align-items-center mt-3">
                    <img
                      src={editor}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <h6 className="ms-2">Nurar Nahar</h6>
                  </div>
                  <div className="date">28 November, 2021</div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="single-news card">
              <img src={group} className="img-fluid" alt="" />
              <div className="p-3">
                <h4 className="my-2">Our Group Makers</h4>
                <div className="news-editor-date d-flex justify-content-between align-items-center">
                  <div className="news-editor d-flex align-items-center mt-3">
                    <img
                      src={editor}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <h6 className="ms-2">Nurar Nahar</h6>
                  </div>
                  <div className="date">28 December, 2021</div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="single-news card">
              <img src={fund} className="img-fluid" style={{height: '276px'}} alt="" />
              <div className="p-3">
                <h4 className="my-2">Our fund riser blog</h4>
                <div className="news-editor-date d-flex justify-content-between align-items-center">
                  <div className="news-editor d-flex align-items-center mt-3">
                    <img
                      src={editor}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <h6 className="ms-2">Nurar Nahar</h6>
                  </div>
                  <div className="date">28 November, 2021</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestNews;
