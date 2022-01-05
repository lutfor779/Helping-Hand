import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../../images/blog-1.jpg"
import blog2 from "../../../images/blog-2.jpg"
import blog3 from "../../../images/blog-3.jpg"
import ceo from "../../../images/player-1.png"
import './LatestNews.css';

const LatestNews = () => {
  return (
    <div className="latest-news py-5" style={{backgroundColor:'#FEF6F3'}}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <div className="section-title mb-5 text-center">
              <h6 className="text-color">Our Blog</h6>
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
            <div className="single-news card mb-3">
              <img src={blog1} className="img-fluid" style={{height: '276px'}} alt="" />
              <div className="p-3">
                <h4 className="my-2">Raise Fund for Save Animals</h4>
                <div className="news-editor-date d-flex justify-content-between align-items-center">
                  <div className="news-editor d-flex align-items-center mt-3">
                    <img
                      src={ceo}
                      style={{width: "16%"}}
                      alt=""
                    />
                    <h6 className="ms-2">Jonathan Smith</h6>
                  </div>
                  <div className="date">28 November, 2021</div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="single-news card mb-3">
              <img src={blog2} className="img-fluid" style={{height: '276px'}} alt="" />
              <div className="p-3">
                <h5 className="my-2">Promoting The Rights of Children</h5>
                <div className="news-editor-date d-flex justify-content-between align-items-center">
                  <div className="news-editor d-flex align-items-center mt-3">
                    <img
                      src={ceo}
                      style={{width: "16%"}}
                      alt=""
                    />
                    <h6 className="ms-2">Jonathan Smith</h6>
                  </div>
                  <div className="date">28 December, 2021</div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="single-news card mb-3">
              <img src={blog3} className="img-fluid" style={{height: '276px'}} alt="" />
              <div className="p-3">
                <h5 className="my-2">Raise Fund for Clean Water</h5>
                <div className="news-editor-date d-flex justify-content-between align-items-center">
                  <div className="news-editor d-flex align-items-center mt-3">
                    <img
                      src={ceo}
                      style={{width: "16%"}}
                      alt=""
                    />
                    <h6 className="ms-2">Jonathan</h6>
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
