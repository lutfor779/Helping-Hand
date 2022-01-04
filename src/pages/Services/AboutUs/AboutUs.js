import React from "react";
import { BsCoin, BsPlusSquareFill } from "react-icons/bs";
import editor from '../../../images/player-1.png';
import left1 from '../../../images/about1.jpg';
import left2 from '../../../images/about2.jpg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      {/* section title end */}
      <section className="aboutus-area pt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="aboutus-left ">
                  <div className="image-one">
                      <img className="img-fluid" src={left1} alt="" />
                  </div>
                  <div className="image-two">
                      <img className="img-fluid" src={left2} alt="" />
                  </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="aboutus-right ">
                <h6 className="theme-color">
                  {" "}
                  <BsPlusSquareFill /> ABOUT OUR SERVICES
                </h6>
                <h3>Welcome to Helping Hand</h3>
                <p>
                  You choose us for our avilability and fund donation service.
                  Our every volunteers works for ours. They done 100 + projects
                  succcessfully.Donate to families with vulnerable children
                  raised by single mothers. Empower vulnerable families for
                  sustainability. View Portfolio. Experienced Team. Subscribe
                  For Newsletter. Highlights: Portfolio Available.
                </p>{" "}
                <div className="d-flex mb-3">
                  <div className="w-50">
                    <p className="theme-bg text-white p-3 rounded">There are many variation in donation service, But we provide  a variety of service that you should choose and donate .</p>
                    <div className="news-editor d-flex align-items-center mt-3">
                    <img
                      src={editor}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <h6 className="ms-2">CEO, Founder</h6>
                  </div>
                  </div>
                  <div className="">
                    <ul className="list-group border-0">
                      <li className="list-group-item border-0">
                        <BsCoin className="theme-color me-3" /> Food Donation
                      </li>
                      <li className="list-group-item border-0">
                        <BsCoin className="theme-color me-3" /> Money Donation
                      </li>
                      <li className="list-group-item border-0">
                        <BsCoin className="theme-color me-3" /> Dress Donation
                      </li>
                      <li className="list-group-item border-0">
                        <BsCoin className="theme-color me-3" /> Water Donation
                      </li>
                      <li className="list-group-item border-0">
                        <BsCoin className="theme-color me-3" /> Dress Donation
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar theme-bg"
                    role="progressbar"
                    style={{width: '70%'}}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <h6>Total Donators</h6>
                    <h6>Grow is Matter</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
